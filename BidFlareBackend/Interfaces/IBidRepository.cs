using System;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces;

public interface IBidRepository
{
    public Task<Bid> CreateBidAsync(Bid bidContent);
    public Task<Bid?> DeleteBidAsync(int bidId);
}
