using System;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Dtos.Auction;
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
}
