using System;
using BidFlareBackend.Models;

namespace BidFlareBackend.Dtos.Auction;

public class AuctionResponceDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiredAt { get; set; }
    public int MinPrice { get; set; }
    public string? ImageName { get; set; }
    public string BidderId { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public List<BidResponceDto>? Bids { get; set; }
}
