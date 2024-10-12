using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BidFlareBackend.Migrations
{
    /// <inheritdoc />
    public partial class UserRolesNew : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "NIC",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5dcd4b3e-89b3-4836-bc94-17addd3d00c5", null, "Organizer", "ORGANIZER" },
                    { "5e001985-5ef9-4ffb-824b-4274c78e0212", null, "Admin", "ADMIN" },
                    { "8b9b2048-643d-4e64-977f-2bccd8da93af", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5dcd4b3e-89b3-4836-bc94-17addd3d00c5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5e001985-5ef9-4ffb-824b-4274c78e0212");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8b9b2048-643d-4e64-977f-2bccd8da93af");

            migrationBuilder.DropColumn(
                name: "NIC",
                table: "AspNetUsers");

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
    }
}
