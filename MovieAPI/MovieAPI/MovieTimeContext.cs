using Microsoft.EntityFrameworkCore;
using MovieAPI.Controllers;
using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Model
{
    public class MovieTimeContext : DbContext
    {

        public MovieTimeContext(DbContextOptions<MovieTimeContext> options) : base(options)
        {
        }
        
        public DbSet<film> film { get; set; }
        public DbSet<serie> serie { get; set; }
        public DbSet<acteur> acteur { get; set; }
        public DbSet<login> login { get; set; }
    }
}
