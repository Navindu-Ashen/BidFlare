using System;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Models;
using Microsoft.AspNetCore.Identity;

namespace BidFlareBackend.Interfaces;

public interface IAccountRepository
{
    Task<UserResponse?> GetUserDetails(string userId);

    Task<IdentityResult> CreateUser(AppUser user, string password);

    Task<IdentityResult> AddUserRole(AppUser user, string role);

    Task<AppUser?> FindUser(LoginDto loginDto);

    Task<SignInResult?> LoginUser(AppUser appUser, LoginDto loginDto);
}
