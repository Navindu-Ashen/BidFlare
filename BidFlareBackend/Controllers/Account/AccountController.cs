using System.Security.Claims;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Interfaces;
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
    public class AccountController(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser> signInManager) : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager = userManager;
        private readonly ITokenService _tokenService = tokenService;
        private readonly SignInManager<AppUser> _signInManager = signInManager;

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

                var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password!);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
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
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == loginDto.UserName!.ToLower());
            if (user == null)
            {
                return Unauthorized("Invalid username or password1!");
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password!, false);

            if (!result.Succeeded)
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
                return BadRequest("user id is null");
            }

            var user = await _userManager.FindByIdAsync(currentUserId!);

            if (user is null)
            {
                return NotFound("User not found");
            }

            return Ok(new UserResponse
            {
                UserName = user.UserName,
                Email = user.Email,
                Id = user.Id,
                PhoneNumber = user.PhoneNumber
            });
        }
    }
}
