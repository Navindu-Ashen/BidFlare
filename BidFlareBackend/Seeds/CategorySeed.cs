using System;
using BidFlareBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace BidFlareBackend.Seeds;

public class CategorySeed
{
    public static void Seed(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>().HasData(
            new Category
            {
                Id = 1,
                CategoryName = "Vehicals"
            },
            new Category
            {
                Id = 2,
                CategoryName = "Fashion"
            },
            new Category
            {
                Id = 3,
                CategoryName = "Electronics"
            },
            new Category
            {
                Id = 4,
                CategoryName = "Antique"
            },
            new Category
            {
                Id = 5,
                CategoryName = "Other"
            }
        );
    }
}
