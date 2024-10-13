using System;
using BidFlareBackend.Data;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Models;

namespace BidFlareBackend.Repositiry;

public class AuctionRepository(ApplicationDbContext context) : IAuctionRepository
{
    private readonly ApplicationDbContext _context = context;
    public async Task<Product> CreateProduct(Product product)
    {
        await _context.Products.AddAsync(product);
        await _context.SaveChangesAsync();
        return product;
    }
}
