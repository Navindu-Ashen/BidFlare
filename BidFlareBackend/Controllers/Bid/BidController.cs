using System.Security.Claims;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Mappers;
using BidFlareBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BidFlareBackend.Controllers.Bid
{
    [Route("api/bid")]
    [ApiController]
    public class BidController(IBidRepository bidRepo, IAuctionRepository auctionRepo) : ControllerBase
    {
        private readonly IBidRepository _bidRepo = bidRepo;
        private readonly IAuctionRepository _auctionRepo = auctionRepo;

        [HttpPost("{productId:int}")]
        [Authorize]
        public async Task<IActionResult> CreateBidAsync([FromRoute] int productId, [FromBody] CreateBidDto createBidDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return BadRequest("User Id not found");
            }

            if (!await _auctionRepo.IsProductExistsAsync(productId))
            {
                return BadRequest("Product not found. Check product ID.");
            }

            var product = await _auctionRepo.GetProductById(productId);
            if (product!.MinPrice > createBidDto.BidValue)
            {
                return BadRequest($"Minimum bid for this product is LKR {product!.MinPrice}.00");
            }
            var bidModel = createBidDto.ToBidModel(productId, userId);
            await _bidRepo.CreateBidAsync(bidModel);

            return Ok("Bid created successfully.");
        }
    }
}
