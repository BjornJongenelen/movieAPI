using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Model
{
    public class DBInitializer
    {
        public static void Initialize(MovieTimeContext context)
        {
            context.Database.EnsureCreated();

            //var mv = new film()
            //{
            //    Tittel = "test",
            //    Jaar = 2109,
            //    Acteurs = "carlos",
            //    Genre = "horror",
            //    Speelduur = 150,
            //    Regisseur = "stavros"

            //};

            //context.film.Add(mv);

            //context.SaveChanges();

        }
    }
}
