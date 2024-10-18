using System;
using BidFlareBackend.Data;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BidFlareBackend.Repositiry;

public class AccountRepositiry(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser> signInManager) : IAccountRepository
{
    private readonly UserManager<AppUser> _userManager = userManager;
    private readonly ITokenService _tokenService = tokenService;
    private readonly SignInManager<AppUser> _signInManager = signInManager;

    public async Task<IdentityResult> AddUserRole(AppUser user, string role)
    {
        var isInRole = await _userManager.IsInRoleAsync(user, role);
        if (isInRole)
        {
            return IdentityResult.Failed(new IdentityError { Description = $"User is already in the {role} role." });
        }
        var roleResult = await _userManager.AddToRoleAsync(user, role);
        return roleResult;
    }

    public async Task<IdentityResult> CreateUser(AppUser user, string password)
    {
        var createdUser = await _userManager.CreateAsync(user, password);
        return createdUser;
    }

    public async Task<AppUser?> FindUser(LoginDto loginDto)
    {
        var userResult = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == loginDto.UserName!.ToLower());
        return userResult;
    }

    public async Task<AppUser?> FindUserById(string id)
    {
        var userResultById = await _userManager.Users.FirstOrDefaultAsync(user => id == user.Id);
        if (userResultById == null)
        {
            return null;
        }

        return userResultById;
    }

    public async Task<UserResponse?> GetUserDetails(string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);

        if (user == null)
        {
            return null;
        }

        return new UserResponse
        {
            UserName = user.UserName,
            Email = user.Email,
            Id = user.Id,
            PhoneNumber = user.PhoneNumber
        };
    }

    public async Task<SignInResult?> LoginUser(AppUser appUser, LoginDto loginDto)
    {
        var result = await _signInManager.CheckPasswordSignInAsync(appUser, loginDto.Password!, false);
        return result;
    }

    public async Task<IdentityResult> UpdateUserRole(AppUser user, string role)
    {
        var isInRole = await _userManager.IsInRoleAsync(user, role);
        if (isInRole)
        {
            return IdentityResult.Failed(new IdentityError { Description = $"User is already in the {role} role." });
        }
        await _userManager.RemoveFromRoleAsync(user, role);
        var roleResult = await _userManager.AddToRoleAsync(user, role);
        return roleResult;
    }
}
