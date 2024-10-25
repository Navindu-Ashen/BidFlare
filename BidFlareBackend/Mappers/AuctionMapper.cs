using System;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Models;

namespace BidFlareBackend.Mappers;

public static class AuctionMapper
{
    public static Product ToCreateAuctionDto(this CreateAutionDto createModel, string bidderId)
    {
        return new Product
        {
            Name = createModel.Name,
            Description = createModel.Description,
            CreatedAt = DateTime.Now,
            ExpiredAt = DateTime.Now.AddDays(createModel.DaysToExpire),
            MinPrice = createModel.MinPrice,
            ImageName = createModel.ImageName,
            BidderId = bidderId,
            CategoryId = createModel.CategoryId
        };
    }

    public static AuctionResponceDto ToAuctionResponceDto(this Product product)
    {
        return new AuctionResponceDto
        {
            Id = product.Id,
            BidderId = product.BidderId,
            Name = product.Name,
            Description = product.Description,
            CreatedAt = product.CreatedAt,
            ExpiredAt = product.ExpiredAt,
            MinPrice = product.MinPrice,
            CurrentMaxPrice = product.CurrentMaxPrice,
            CurrentSelectedUser = product.CurrentSelectedUser,
            ImageName = product.ImageName,
            Category = product.Category!.CategoryName,
            Bids = product.Bids.Select(bid => bid.ToBidResponceDto()).ToList(),
        };
    }
}
