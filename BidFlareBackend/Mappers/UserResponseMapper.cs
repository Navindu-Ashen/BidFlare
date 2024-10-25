using System;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Dtos.Auction;
using BidFlareBackend.Dtos.Bidder;
using BidFlareBackend.Models;

namespace BidFlareBackend.Mappers;

public static class UserResponseMapper
{
    public static UserResponceDto ToUserResponceDto(this UserResponse userResponse)
    {
        return new UserResponceDto
        {
            UserName = userResponse.UserName,
            Email = userResponse.Email,
            Id = userResponse.Id,
            PhoneNumber = userResponse.PhoneNumber,
            Bids = userResponse.MyBids
        };
    }

    public static BidUserResponceDto ToBidUserResponceDto(this Bid bid)
    {
        return new BidUserResponceDto
        {
            Id = bid.Id,
            BidValue = bid.BidValue,
            CreatedAt = bid.CreatedAt,
            ProductId = bid.ProductId
        };
    }

    public static BidderProductResponceDto ToBidderProductResponceDto(this Product product)
    {
        return new BidderProductResponceDto
        {
            Id = product.Id,
            Name = product.Name,
            Description = product.Description,
            CategoryName = product.Category!.CategoryName,
            CreatedAt = product.CreatedAt,
            ExpiredAt = product.ExpiredAt,
            ImageName = product.ImageName,
            MinPrice = product.MinPrice,
            CurrentMaxPrice = product.CurrentMaxPrice,
            CurrentSelectedUserId = product.CurrentSelectedUser
        };
    }
}
