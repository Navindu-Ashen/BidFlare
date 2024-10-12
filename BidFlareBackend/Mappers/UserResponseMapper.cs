using System;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Models;

namespace BidFlareBackend.Mappers;

public static class UserResponseMapper
{
    public static UserDto ToUserDto(this UserResponse userResponse)
    {
        return new UserDto
        {
            UserName = userResponse.UserName,
            Email = userResponse.Email,
            Id = userResponse.Id,
            PhoneNumber = userResponse.PhoneNumber
        };
    }
}
