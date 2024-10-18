using System;

namespace BidFlareBackend.Dtos.Auction;

public class BidResponceDto
{
    public int Id { get; set; }
    public int BidValue { get; set; }
    public DateTime CreatedAt { get; set; }
    public string UserId { get; set; } = string.Empty;
}
