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
        var products = await _context.Products.Include(bid => bid.Bids).Include(category => category.Category).Where(product => product.IsAuctionExpired == false).ToListAsync();
        return products;
    }

    public async Task<List<Product>> GetAllProductsByBidderId(string bidderId)
    {
        var products = await _context.Products.Include(bid => bid.Bids).Include(category => category.Category).Where(product => product.BidderId == bidderId).ToListAsync();
        return products;
    }

    public async Task<List<Product>> GetExpriedAuctionsAsync()
    {
        return await _context.Products
                .Where(product => product.ExpiredAt < DateTime.Now && product.IsAuctionExpired == false)
                .ToListAsync();
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

    public async Task<Product?> MarkAuctionAsExpiredAsync(int productId)
    {
        var existingProduct = await _context.Products.FirstOrDefaultAsync(product => product.Id == productId);
        
        if(existingProduct == null)
        {
            return null;
        }

        existingProduct.IsAuctionExpired = true;

        await _context.SaveChangesAsync();
        return existingProduct;
    }

    public async Task<Product?> UpdateProductBidDetailsAsync(int bidValue, string userId, int productId)
    {
        var existingProduct = await _context.Products.FirstOrDefaultAsync(product => product.Id == productId);
        
        if(existingProduct == null)
        {
            return null;
        }

        existingProduct.CurrentMaxPrice = bidValue;
        existingProduct.CurrentSelectedUser = userId;

        await _context.SaveChangesAsync();
        return existingProduct;
    }
}
