using System;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces;

public interface IAccountRepository
{
    Task<UserResponse> GetUserDetails();
}
