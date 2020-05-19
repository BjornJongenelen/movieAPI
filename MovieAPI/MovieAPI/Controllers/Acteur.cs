using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Model;

namespace MovieAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class Acteurs : ControllerBase
    {//send data
        [HttpPost]
        public IActionResult addMovie([FromBody] acteur newActor)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.acteur.Add(newActor);
            context.SaveChanges();
            return Created("", newActor);
        }
        private readonly MovieTimeContext context;

        public Acteurs(MovieTimeContext context)
        {
            this.context = context;
        }

        //read all data
        [HttpGet]
        public List<acteur> GetAllMovies()
        {
            return context.acteur.ToList();
        }

        //delete
        [Route("{tittel}")]
        [HttpDelete]
        public IActionResult DeleteActor(string naam)
        {
            var actor = context.acteur.Find(naam);
            if (actor == null)
                return NotFound();

            context.acteur.Remove(actor);
            context.SaveChanges();
            return NoContent();
        }

        //update
        [HttpPut]
        public IActionResult UpdateMovie([FromBody] acteur UpdateActor)
        {
            var acteurs = context.acteur.Find(UpdateActor.Naam);
            if (acteurs == null)
                return NotFound();

            acteurs.Naam = UpdateActor.Naam;
            acteurs.Nationaliteit = UpdateActor.Nationaliteit;
            acteurs.Leeftijd = UpdateActor.Leeftijd;
            acteurs.GeboorteDatum = UpdateActor.GeboorteDatum;
            acteurs.Oscars = UpdateActor.Oscars;

            context.SaveChanges();
            return Ok(acteurs);
        }
    }
}
