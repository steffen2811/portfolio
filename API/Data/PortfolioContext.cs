using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) {}

        public DbSet<Project> Projects { get; set; }
        
    }
}