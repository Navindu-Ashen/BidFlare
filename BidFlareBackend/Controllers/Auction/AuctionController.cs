using System.Security.Claims;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BidFlareBackend.Controllers.Auction
{
    [Route("api/auction")]
    [ApiController]
    public class AuctionController(IAuctionRepository auctionRepo, IAccountRepository accountRepo) : ControllerBase
    {
        private readonly IAuctionRepository _auctionRepo = auctionRepo;
        private readonly IAccountRepository _accountRepo = accountRepo;

        [Authorize(Roles = "Bidder")]
        [HttpPost("createAuction")]
        public async Task<IActionResult> CreateAuction([FromBody] CreateAutionDto createAutionDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (currentUserId is null)
            {
                return BadRequest("User ID not found in the token");
            }

            var user = await _accountRepo.GetUserDetails(currentUserId);

            var product = createAutionDto.ToCreateAuctionDto(user!.Id!);
            await _auctionRepo.CreateProduct(product);
            return Ok("Auction created successfully.");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAuctions()
        {
            var auctions = await _auctionRepo.GetAllProducts();
            var results = auctions.Select(result => result.ToAuctionResponceDto());
            return Ok(results);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetAuctionById([FromRoute] int id)
        {
            var auction = await _auctionRepo.GetProductById(id);
            if (auction == null)
            {
                return NotFound("Product not found.");
            }
            var result = auction.ToAuctionResponceDto();
            return Ok(result);
        }
    }
}
