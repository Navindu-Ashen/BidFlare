using System;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces;

public interface IAuctionRepository
{
    Task<Product> CreateProduct(Product product);
    Task<List<Product>> GetAllProducts();
    Task<List<Product>> GetAllProductsByBidderId(string bidderId);
    Task<Product?> GetProductById(int id);
    Task<bool> IsProductExistsAsync(int id);
    Task<Product?> UpdateProductBidDetailsAsync(int bidValue, string userId, int productId);
}
