using System;
using System.ComponentModel.DataAnnotations;

namespace BidFlareBackend.Dtos.Account;

public class LoginDto
{
    [Required]
    public string? UserName { get; set; }

    [Required]
    public string? Password { get; set; }
}
