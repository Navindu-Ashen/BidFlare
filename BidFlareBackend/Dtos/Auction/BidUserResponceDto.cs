using System;

namespace BidFlareBackend.Dtos.Auction;

public class BidUserResponceDto
{
    public int Id { get; set; }
    public int BidValue { get; set; }
    public DateTime CreatedAt { get; set; }
    public int ProductId { get; set; }
}
