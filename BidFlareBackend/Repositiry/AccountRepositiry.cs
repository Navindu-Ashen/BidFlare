using System;
using BidFlareBackend.Data;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Models;
using Microsoft.AspNetCore.Identity;

namespace BidFlareBackend.Repositiry;

public class AccountRepositiry(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser> signInManager) : IAccountRepository
{
    private readonly UserManager<AppUser> _userManager = userManager;
    private readonly ITokenService _tokenService = tokenService;
    private readonly SignInManager<AppUser> _signInManager = signInManager;

    public Task<UserResponse> GetUserDetails()
    {
        throw new NotImplementedException();
    }
}
