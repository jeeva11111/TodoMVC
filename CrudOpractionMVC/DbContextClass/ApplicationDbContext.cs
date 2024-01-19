using CrudOpractionMVC.Models.TodoList;
using Microsoft.EntityFrameworkCore;

namespace CrudOpractionMVC.DbContextClass
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Todo> Todos { get; set; }
    }
}
