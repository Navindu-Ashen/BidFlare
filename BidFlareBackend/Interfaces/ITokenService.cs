using System;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces;

public interface ITokenService
{
    string CreateToken(AppUser user);
}
