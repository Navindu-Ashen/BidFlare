using System;
using BidFlareBackend.Data;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace BidFlareBackend.Repositiry;

public class BidRepository(ApplicationDbContext context) : IBidRepository
{
    private readonly ApplicationDbContext _context = context;
    public async Task<Bid> CreateBidAsync(Bid bidContent)
    {
        await _context.Bids.AddAsync(bidContent);
        await _context.SaveChangesAsync();
        return bidContent;
    }

    public async Task<Bid?> DeleteBidAsync(int bidId)
    {
        var bidModel = await _context.Bids.FirstOrDefaultAsync(bid => bid.Id == bidId);

        if (bidModel == null)
        {
            return null;
        }
        _context.Bids.Remove(bidModel);
        await _context.SaveChangesAsync();
        return bidModel;
    }

    public async Task<Bid?> GetBidAsync(int bidId)
    {
        var bidModel = await _context.Bids.FirstOrDefaultAsync(bid => bid.Id == bidId);

        if (bidModel == null)
        {
            return null;
        }

        return bidModel;
    }

    public async Task<List<Bid>?> GetBisdByProductIdAsync(int productId)
    {
        var bids = await _context.Bids.Where(bid => bid.ProductId == productId).ToListAsync();
        if(bids == null)
        {
            return null;
        }
        
        return bids;
    }
}
