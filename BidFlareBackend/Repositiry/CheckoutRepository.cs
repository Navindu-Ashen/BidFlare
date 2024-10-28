using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidFlareBackend.Data;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Models;

namespace BidFlareBackend.Repositiry
{
    public class CheckoutRepository(ApplicationDbContext context, IBidRepository bidRepo) : ICheckoutRepository
    {
        private readonly IBidRepository _bidRepo = bidRepo;
        private readonly ApplicationDbContext _context = context;

        public async Task<Bid> MakePaymentAsync(int bidId)
        {
            var bid = await _bidRepo.GetBidAsync(bidId);
            
            bid!.IsPaymentSuccess = true;

            await _context.SaveChangesAsync();
            return bid;
        }

    }
}