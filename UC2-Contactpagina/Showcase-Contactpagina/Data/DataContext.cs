namespace Showcase_Contactpagina.Data;
using Microsoft.EntityFrameworkCore;
using Showcase_Contactpagina.Models;
public class DataContext : DbContext
{

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Comment> Comments { get; set; }
}
