using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BidFlareBackend.Dtos.Checkout
{
    public class CheckoutResponceDto
    {
        public string? SessionId { get; set; }
        public string? PubKey { get; set; }
    }
}