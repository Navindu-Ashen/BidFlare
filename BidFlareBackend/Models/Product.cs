using System;

namespace BidFlareBackend.Models;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiredAt { get; set; }
    public int MinPrice { get; set; }
    public string? ImageName { get; set; }
    public string BidderId { get; set; } = string.Empty;
    public int CategoryId { get; set; }
    public Category? Category { get; set; }
    public List<Bid> Bids { get; set; } = [];
}
