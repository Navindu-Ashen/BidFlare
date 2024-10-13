using System;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces;

public interface IAuctionRepository
{
    Task<Product> CreateProduct(Product product);
}
