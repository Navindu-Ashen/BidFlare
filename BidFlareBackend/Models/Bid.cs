using System;

namespace BidFlareBackend.Models;

public class Bid
{
    public int Id { get; set; }
    public int BidValue { get; set; }
    public DateTime CreatedAt { get; set; }
    public string UserId { get; set; } = string.Empty;
    public int ProductId { get; set; }
    public bool IsWonAuction { get; set; }
    public bool IsPending { get; set; }
    public bool IsPaymentSuccess { get; set; }
    public Product? Product { get; set; }
    public AppUser? User { get; set; }
}
