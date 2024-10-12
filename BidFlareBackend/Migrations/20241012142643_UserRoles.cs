using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BidFlareBackend.Migrations
{
    /// <inheritdoc />
    public partial class UserRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4f3865eb-ef5a-4d21-9eb6-92e7c1ca97f4", null, "Admin", "ADMIN" },
                    { "d7421682-0abd-4d72-a404-306f9c000607", null, "Organizer", "ORGANIZER" },
                    { "fe24cafe-58de-4667-9b0e-b6ed53439c13", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4f3865eb-ef5a-4d21-9eb6-92e7c1ca97f4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d7421682-0abd-4d72-a404-306f9c000607");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fe24cafe-58de-4667-9b0e-b6ed53439c13");
        }
    }
}
