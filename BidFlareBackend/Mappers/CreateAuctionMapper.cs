using System;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Models;

namespace BidFlareBackend.Mappers;

public static class CreateAuctionMapper
{
    public static Product ToCreateAuctionDto(this CreateAutionDto createModel, string  bidderId)
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
}
