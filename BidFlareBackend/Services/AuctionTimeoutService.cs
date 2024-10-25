using BidFlareBackend.Interfaces;

namespace Backend.Services
{
    public class AuctionTimeoutService(IServiceProvider serviceProvider) : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider = serviceProvider;

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                await CheckAndUpdateExpiredAuctions(stoppingToken);
                await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
            }
        }

        private async Task CheckAndUpdateExpiredAuctions(CancellationToken stoppingToken)
        {
            using var scope = _serviceProvider.CreateScope();
            var auctionRepo = scope.ServiceProvider.GetRequiredService<IAuctionRepository>();
            var bidRepo = scope.ServiceProvider.GetRequiredService<IBidRepository>();
            Console.WriteLine("Auction time out function.............................");
            var expiredAuctions = await auctionRepo.GetExpriedAuctionsAsync();
            Console.WriteLine($"Expired auction count : {expiredAuctions.Count}");
            if (expiredAuctions.Count > 0)
            {
                foreach (var expiredAuction in expiredAuctions)
                {
                    await auctionRepo.MarkAuctionAsExpiredAsync(expiredAuction.Id);
                    if (expiredAuction.CurrentMaxPrice != 0)
                    {
                        await bidRepo.MarkBidAsWonAsync(expiredAuction.CurrentMaxPrice);
                        await bidRepo.MarkBidExpiredAsync(expiredAuction.Id);
                    }
                }
            }
        }
    }
}
