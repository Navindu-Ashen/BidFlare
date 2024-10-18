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

    
}
