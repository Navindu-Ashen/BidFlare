using System;
using BidFlareBackend.Models;

namespace BidFlareBackend.Dtos.Bidder;

public class BidderProductResponceDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiredAt { get; set; }
    public int MinPrice { get; set; }
    public string? ImageName { get; set; }
    public string CategoryName { get; set; } = string.Empty;
}
