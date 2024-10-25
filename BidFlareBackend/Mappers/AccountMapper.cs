using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidFlareBackend.Dtos.Account;
using BidFlareBackend.Models;

namespace BidFlareBackend.Mappers
{
    public static class AccountMapper
    {
        public static UserDto ToUserDto(this AppUser appUser)
        {
            return new UserDto
            {
                Id = appUser.Id,
                Email = appUser.Email,
                PhoneNumber = appUser.PhoneNumber,
                UserName = appUser.UserName
            };
        }
    }
}