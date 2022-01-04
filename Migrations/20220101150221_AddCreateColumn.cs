using Microsoft.EntityFrameworkCore.Migrations;

namespace Employee.Migrations
{
    public partial class AddCreateColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Division",
                table: "Branches");

            migrationBuilder.AddColumn<string>(
                name: "BranchDivision",
                table: "Branches",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BranchDivision",
                table: "Branches");

            migrationBuilder.AddColumn<string>(
                name: "Division",
                table: "Branches",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
