using System;
using BidFlareBackend.Dtos.Bidder;

namespace BidFlareBackend.Models;

public class BidderResponce
{
    public string? Id { get; set; }
    public string? UserName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public List<BidderProductResponceDto> MyProducts { get; set; } = [];
}
