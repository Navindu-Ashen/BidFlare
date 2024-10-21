using System.Security.Claims;
using BidFlareBackend.Data;
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
    public class BidController(IBidRepository bidRepo, IAuctionRepository auctionRepo, IAccountRepository accountRepo) : ControllerBase
    {
        private readonly IBidRepository _bidRepo = bidRepo;
        private readonly IAuctionRepository _auctionRepo = auctionRepo;
        private readonly IAccountRepository _accountRepo = accountRepo;

        [HttpPost("{productId:int}")]
        [Authorize(Roles = "User")]
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
            
            var updatedProduct = await _auctionRepo.UpdateProductBidDetailsAsync(bidModel.BidValue, userId, bidModel.ProductId);

            if(updatedProduct == null)
            {
                return BadRequest("Somthing failed to update product");
            }

            await _bidRepo.CreateBidAsync(bidModel);

            return Ok("Bid created successfully.");
        }

        [HttpDelete("{bidId:int}")]
        [Authorize(Roles = "User")]
        public async Task<IActionResult> DeleteBidAsync([FromRoute] int bidId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userId == null)
            {
                return BadRequest("User Id not found");
            }

            var userResult = await _accountRepo.GetUserDetails(userId);

            if (userResult == null)
            {
                return BadRequest("User not found");
            }

            var found = userResult.MyBids.FirstOrDefault(bid => bid.Id == bidId);

            if (found == null)
            {
                return BadRequest("Delete failed. User can only delete own bids only. Make sure you have entered the correct product ID.");
            }

            var delete = await _bidRepo.DeleteBidAsync(bidId);
            if (delete == null)
            {
                return BadRequest("Delete faild. Database error.");
            }

            return Ok("Bid deleted successfully.");
        }
    }
}
