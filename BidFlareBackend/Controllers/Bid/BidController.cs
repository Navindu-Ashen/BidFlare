using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
            if (product!.CurrentMaxPrice > createBidDto.BidValue)
            {
                return BadRequest($"Current aution is LKR {product!.CurrentMaxPrice}.00. Please enter higher value.");
            }
            var bidModel = createBidDto.ToBidModel(productId, userId);


            var updatedProduct = await _auctionRepo.UpdateProductBidDetailsAsync(createBidDto.BidValue, userId, productId);

            if (updatedProduct == null)
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

            var pastBids = await _bidRepo.GetBisdByProductIdAsync(found.ProductId);

            if (pastBids == null)
            {
                await _auctionRepo.UpdateProductBidDetailsAsync(0, "", found.ProductId);
            }
            else
            {
                if (pastBids.Count == 0)
                {
                    await _auctionRepo.UpdateProductBidDetailsAsync(0, "", found.ProductId);
                }
                else
                {
                    await _auctionRepo.UpdateProductBidDetailsAsync(pastBids[^1].BidValue, pastBids[^1].UserId, found.ProductId);
                }
            }

            return Ok("Bid deleted successfully.");
        }
    }
}