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
    public int CategoryId { get; set; }
}
