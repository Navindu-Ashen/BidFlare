using System;
using BidFlareBackend.Dtos.Auction;

namespace BidFlareBackend.Models;

public class UserResponse
{
    public string? Id { get; set; }
    public string? UserName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Token { get; set; }
    public List<BidUserResponceDto> MyBids { get; set; } = [];
}
