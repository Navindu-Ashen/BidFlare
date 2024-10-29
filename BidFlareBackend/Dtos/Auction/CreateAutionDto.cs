using System;
using System.ComponentModel.DataAnnotations;

namespace BidFlareBackend.Dtos.Auction;

public class CreateAutionDto
{
    [Required]
    [MinLength(6, ErrorMessage = "Product name must be at least 6 characters")]
    [MaxLength(100, ErrorMessage = "Product name should not exceed 100 characters")]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MinLength(6, ErrorMessage = "Product description must be at least 6 characters")]
    public string Description { get; set; } = string.Empty;

    [Required]
    public int DaysToExpire { get; set; }

    [Required]
    public int MinPrice { get; set; }

    [Required]
    public string? ImageName { get; set; }

    [Required]
    public int CategoryId { get; set; }
}
