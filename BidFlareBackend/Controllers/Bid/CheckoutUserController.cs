using System.Security.Claims;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Dtos.Checkout;
using BidFlareBackend.Interfaces;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Mvc;
using Stripe.Checkout;


namespace BidFlareBackend.Controllers.Bid
{
    [Route("api/checkout")]
    [ApiController]
    public class CheckoutUserController(IConfiguration configuration, IBidRepository bidRepo, IAuctionRepository auctionRepo, ICheckoutRepository checkoutRepo) : ControllerBase
    {
        private readonly IConfiguration _configuration = configuration;
        private readonly IBidRepository _bidRepo = bidRepo;
        private readonly IAuctionRepository _auctionRepo = auctionRepo;
        private readonly ICheckoutRepository _checkoutRepo = checkoutRepo;
        private static string s_wasmClientURL = string.Empty;

        [HttpPost("{bidId:int}")]
        public async Task<IActionResult> CheckoutOrder([FromRoute] int bidId, [FromServices] IServiceProvider sp)
        {
            var bid = await _bidRepo.GetBidAsync(bidId);
            if (bid == null)
            {
                return BadRequest("Bid not found. Please try again with correct parameters.");
            }

            var currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (currentUserId == null || currentUserId != bid.UserId)
            {
                return BadRequest("Invalid User ID.");
            }

            var product = await _auctionRepo.GetProductById(bid.ProductId);
            if (product == null)
            {
                return BadRequest("Product not found.");
            }
            CheckoutRequestDto checkoutRequestDto = new()
            {
                BidId = bid.Id,
                BidPrice = product.CurrentMaxPrice,
                ProductDescription = product.Description,
                ProductId = product.Id,
                ProductName = product.Name,
                UserId = currentUserId
            };

            var referer = Request.Headers.Referer;
            s_wasmClientURL = referer[0]!;

            // Build the URL to which the customer will be redirected after paying.
            var server = sp.GetRequiredService<IServer>();

            var serverAddressesFeature = server.Features.Get<IServerAddressesFeature>();

            string? thisApiUrl = null;

            if (serverAddressesFeature is not null)
            {
                thisApiUrl = serverAddressesFeature.Addresses.FirstOrDefault();
            }

            if (thisApiUrl is not null)
            {
                var sessionId = await CheckOut(checkoutRequestDto, thisApiUrl);
                var pubKey = _configuration["Stripe:PubKey"];

                var checkoutOrderResponse = new CheckoutResponceDto()
                {
                    SessionId = sessionId,
                    PubKey = pubKey
                };

                return Ok(checkoutOrderResponse);
            }
            else
            {
                return StatusCode(500);
            }
        }

        [NonAction]
        public async Task<string> CheckOut(CheckoutRequestDto checkoutRequestDto, string thisApiUrl)
        {
            HttpContext.Session.SetString("UserID", checkoutRequestDto.UserId);
            HttpContext.Session.SetInt32("ProductID", checkoutRequestDto.ProductId);
            HttpContext.Session.SetInt32("BidId", checkoutRequestDto.BidId);

            var options = new SessionCreateOptions
            {
                // Stripe calls the URLs below when certain checkout events happen such as success and failure.
                SuccessUrl = $"{thisApiUrl}/api/checkout/success?sessionId={{CHECKOUT_SESSION_ID}}", // Customer paid.
                CancelUrl = s_wasmClientURL + "failed",  // Checkout cancelled.
                PaymentMethodTypes =
                // Only card available in test mode?
                [
                    "card"
                ],
                LineItems =
                [
                    new()
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        UnitAmount = checkoutRequestDto.BidPrice,
                        Currency = "USD",
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = checkoutRequestDto.ProductName,
                            Description = checkoutRequestDto.ProductDescription,
                        },
                    },
                    Quantity = 1,
                },
            ],
                Mode = "payment"
            };

            var service = new SessionService();
            var session = await service.CreateAsync(options);

            return session.Id;
        }

        [HttpGet("success")]
        public async Task<IActionResult> CheckoutSuccess(string sessionId)
        {
            var sessionService = new SessionService();
            var session = sessionService.Get(sessionId);

            if (session == null || session.PaymentStatus != "paid")
            {
                return BadRequest("Invalid session ID or payment not completed.");
            }

            var userID = HttpContext.Session.GetString("UserID");
            var productID = HttpContext.Session.GetInt32("ProductID");
            var bidID = HttpContext.Session.GetInt32("BidId");

            if (bidID == null)
            {
                return BadRequest("Somthing went wrong");
            }

            var updatedBid = await _checkoutRepo.MakePaymentAsync(bidID ?? 0);

            if (updatedBid == null)
            {
                return BadRequest("Somthing went wrong. Pleace contact developers");
            }
            
            return Redirect(s_wasmClientURL.TrimEnd('/') + "/success");
        }
    }
}
