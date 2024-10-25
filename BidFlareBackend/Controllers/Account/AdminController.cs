using BidFlareBackend.Interfaces;
using BidFlareBackend.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BidFlareBackend.Controllers.Account
{
    [Route("api/admin")]
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class AdminController(IAccountRepository accountRepo) : ControllerBase
    {
        private readonly IAccountRepository _accountRepo = accountRepo;

        [HttpGet("allusers")]
        public async Task<IActionResult> GetAllUsersAsync()
        {
            var users = await _accountRepo.GetAllUsersAsync();
            if (users == null)
            {
                return NotFound("Users not found");
            }
            var formatedUsers = users.Select(user => user.ToUserDto()).ToList();
            return Ok(formatedUsers);
        }

        [HttpGet("user/{id}")]
        public async Task<IActionResult> GetUserDetailsById([FromRoute] string id)
        {
            var user = await _accountRepo.GetUserDetails(id);
            return Ok(user);
        }

        [HttpGet("bidder/{id}")]
        public async Task<IActionResult> GetBidderDetailsById([FromRoute] string id)
        {
            var bidder = await _accountRepo.GetBidderDetails(id);
            return Ok(bidder);
        }

        [HttpGet("allbidders")]
        public async Task<IActionResult> GetAllBiddersAsync()
        {
            var bidders = await _accountRepo.GetAllBiddersAsync();
            if (bidders == null)
            {
                return NotFound("Users not found");
            }
            var formatedBidders = bidders.Select(bidder => bidder.ToUserDto()).ToList();
            return Ok(formatedBidders);
        }
    }
}