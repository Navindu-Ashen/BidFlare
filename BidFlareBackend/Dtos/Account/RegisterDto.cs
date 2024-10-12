using System;
using System.ComponentModel.DataAnnotations;

namespace BidFlareBackend.Dtos.Account;

public class RegisterDto
{
    [Required]
    [MinLength(6, ErrorMessage ="UserName must be at least 6 characters")]
    [MaxLength(20, ErrorMessage="UserName should not exceed 20 characters")]
    public string? UserName { get; set; }

    [Required]
    [EmailAddress]
    public string? Email { get; set; }

    [Required]
    public string? Password { get; set; }
}
