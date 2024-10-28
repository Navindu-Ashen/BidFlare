using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BidFlareBackend.Dtos.Auction
{
    public class CheckoutRequestDto
    {
        public string UserId { get; set; } = string.Empty;
        public int ProductId { get; set; }
        public int BidId { get; set; }
        public int BidPrice { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string ProductDescription { get; set; } = string.Empty;
    }
}