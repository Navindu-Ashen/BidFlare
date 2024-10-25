using System;

namespace BidFlareBackend.Models;

public class Category
{
    public int Id { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public List<Product> MyProperty { get; set; } = [];
}
