using System;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces;

public interface IBidRepository
{
    public Task<Bid> CreateBidAsync(Bid bidContent);
    public Task<Bid?> DeleteBidAsync(int bidId);
    public Task<Bid?> GetBidAsync(int bidId);
    public Task<List<Bid>?> GetBisdByProductIdAsync(int productId);
    public Task MarkBidExpiredAsync(int productId);
    public Task MarkBidAsWonAsync(int bidValue);
}
