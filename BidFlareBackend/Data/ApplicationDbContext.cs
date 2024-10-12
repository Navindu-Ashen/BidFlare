using System;
using BidFlareBackend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BidFlareBackend.Data;

public class ApplicationDbContext(DbContextOptions options) : IdentityDbContext<AppUser>(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        List<IdentityRole> roles =
        [
            new() {
                Name = "Admin",
                NormalizedName = "ADMIN",
            },
            new() {
                Name = "Organizer",
                NormalizedName = "ORGANIZER",
            },
            new() {
                Name = "User",
                NormalizedName = "USER",
            }
        ];
        builder.Entity<IdentityRole>().HasData(roles);
    }
}
