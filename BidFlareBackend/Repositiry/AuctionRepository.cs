using System;
using BidFlareBackend.Data;
using BidFlareBackend.Interfaces;
using BidFlareBackend.Models;
using Microsoft.EntityFrameworkCore;

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

    public async Task<List<Product>> GetAllProducts()
    {
        var products = await _context.Products.Include(bid => bid.Bids).Include(category => category.Category).ToListAsync();
        return products;
    }

    public async Task<Product?> GetProductById(int id)
    {
        var product = await _context.Products.Include(bid => bid.Bids).Include(category => category.Category).FirstOrDefaultAsync(product => product.Id == id);
        if (product == null)
        {
            return null;
        }
        return product;
    }

    public Task<bool> IsProductExistsAsync(int id)
    {
        return _context.Products.AnyAsync(stock => stock.Id == id);
    }
}
