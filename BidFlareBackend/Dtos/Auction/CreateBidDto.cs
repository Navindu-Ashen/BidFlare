using System;
using System.ComponentModel.DataAnnotations;

namespace BidFlareBackend.Dtos.Auction;

public class CreateBidDto
{
    [Required]
    [Range(1,1000000, ErrorMessage = "Please enter a valid bid between 1 and 1,000,000 LKR")]
    public int BidValue { get; set; }
}
