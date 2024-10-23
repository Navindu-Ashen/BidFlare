using System;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Models;

namespace BidFlareBackend.Mappers;

public static class BidMapper
{
    public static Bid ToBidModel(this CreateBidDto createBidDto, int productId, string userId)
    {
        return new Bid
        {
            BidValue = createBidDto.BidValue,
            CreatedAt = DateTime.Now,
            ProductId = productId,
            UserId = userId,
            IsPending = true,
            IsWonAuction = false
        };
    }

    public static BidResponceDto ToBidResponceDto(this Bid bid)
    {
        return new BidResponceDto
        {
            Id = bid.Id,
            BidValue = bid.BidValue,
            CreatedAt = bid.CreatedAt,
            UserId = bid.UserId
        };
    }

    public static Bid ToBidModelFromBidUserRespoceDto(this BidUserResponceDto bidUserResponceDto, string userId)
    {
        return new Bid
        {
            Id = bidUserResponceDto.Id,
            BidValue = bidUserResponceDto.BidValue,
            CreatedAt = bidUserResponceDto.CreatedAt,
            ProductId = bidUserResponceDto.ProductId,
            UserId = userId
        };
    }
}
