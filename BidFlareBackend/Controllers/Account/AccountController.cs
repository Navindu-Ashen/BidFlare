using System.Security.Claims;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Mappers;
using BidFlareBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BidFlareBackend.Controllers.Account
{
    [Route("api/account")]
    [ApiController]
    public class AccountController(ITokenService tokenService, IAccountRepository accountRepo) : ControllerBase
    {
        private readonly ITokenService _tokenService = tokenService;

        private readonly IAccountRepository _accountRepo = accountRepo;

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var appUser = new AppUser
                {
                    UserName = registerDto.UserName,
                    Email = registerDto.Email,
                    PhoneNumber = registerDto.PhoneNumber,
                };

                var createdUser = await _accountRepo.CreateUser(appUser, registerDto.Password!);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _accountRepo.AddUserRole(appUser, "User");
                    if (roleResult.Succeeded)
                    {
                        return Ok("User created successfully.");
                    }
                    else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = await _accountRepo.FindUser(loginDto);
            if (user == null)
            {
                return Unauthorized("Invalid username or password1!");
            }

            var result = await _accountRepo.LoginUser(user, loginDto);

            if (!result!.Succeeded)
            {
                return Unauthorized("Invalid username or password!");
            }

            return Ok(new NewUserDto
            {
                UserName = user.UserName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            });
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUserDetailsAsync()
        {
            var currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (currentUserId is null)
            {
                return BadRequest("User ID not found in the token");
            }

            var user = await _accountRepo.GetUserDetails(currentUserId);

            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(user.ToUserDto());
        }
    }
}
