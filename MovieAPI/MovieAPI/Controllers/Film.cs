using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Model;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Film : Controller
    {
        //send data
        [HttpPost]
        public IActionResult addFilm([FromBody] film newMovie)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.film.Add(newMovie);
            context.SaveChanges();
            return Created("", newMovie);
        }

        private readonly MovieTimeContext context;
        public Film(MovieTimeContext context)
        {
            this.context = context;
        }


        //read all data 
        //[HttpGet]
        //public List<film> GetAllMovies()
        //{

        //    return context.film.ToList();
        //}

        //-------------------------------------------------paging

        [HttpGet]
        public List<film> GetAllMovies(string genre, string tittel, int? page, int length = 2)
        {
            IQueryable<film> query = context.film;

            if (!string.IsNullOrWhiteSpace(genre))
                query = query.Where(d => d.Genre == genre);
            if (!string.IsNullOrWhiteSpace(tittel))
                query = query.Where(d => d.Tittel == tittel);

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);

            return query.ToList();
        }

        //delete
        [HttpDelete ("{tittel}")]
        public IActionResult DeleteMovie(string tittel)
        {
            var film = context.film.Find(tittel);
            if (film == null)
                return NotFound("not found");
           
            context.film.Remove(film);
            context.SaveChanges();
            var text =Content("film verwijdert!");
            return text;
        }

        //update
        [HttpPut]
        public IActionResult UpdateMovie([FromBody] film UpdateMovie)
        {
            var movie = context.film.Find(UpdateMovie.Tittel);
            if (movie == null)
                return NotFound();

            movie.Tittel = UpdateMovie.Tittel;
            movie.Regisseur = UpdateMovie.Regisseur;
            movie.Speelduur = UpdateMovie.Speelduur;
            movie.Jaar = UpdateMovie.Jaar;
            movie.Oscar = UpdateMovie.Oscar;
            movie.Genre = UpdateMovie.Genre;

            context.SaveChanges();
            return Ok(movie);
        }

    }
}
