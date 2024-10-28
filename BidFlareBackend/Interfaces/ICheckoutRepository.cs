using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidFlareBackend.Models;

namespace BidFlareBackend.Interfaces
{
    public interface ICheckoutRepository
    {
        public Task<Bid> MakePaymentAsync(int bidId);
    }
}