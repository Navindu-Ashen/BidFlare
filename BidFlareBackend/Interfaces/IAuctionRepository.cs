using System;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces;

public interface IAuctionRepository
{
    Task<Product> CreateProduct(Product product);
    Task<List<Product>> GetAllProducts();

    Task<Product?> GetProductById(int id);

    Task<bool> IsProductExistsAsync(int id);
}
