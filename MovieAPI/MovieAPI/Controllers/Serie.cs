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
    public class Serie : Controller
    {
        //send data
        [HttpPost]
        public IActionResult addSerie([FromBody] serie newSerie)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.serie.Add(newSerie);
            context.SaveChanges();
            return Created("", newSerie);
        }
        private readonly MovieTimeContext context;

        public Serie(MovieTimeContext context)
        {
            this.context = context;
        }

        //read all data
        [HttpGet]
        public List<serie> GetAllSerie()
        {
            return context.serie.ToList();
        }

        //delete
        [Route("{tittel}")]
        [HttpDelete]
        public IActionResult DeleteSerie(string tittel)
        {
            var serie = context.serie.Find(tittel);
            if (serie == null)
                return NotFound();

            context.serie.Remove(serie);
            context.SaveChanges();
            return NoContent();
        }

        //update
        [HttpPut]
        public IActionResult UpdateSerie([FromBody] serie UpdateSerie)
        {
            var serie = context.serie.Find(UpdateSerie.Tittel);
            if (serie == null)
                return NotFound();

            serie.Tittel = UpdateSerie.Tittel;
            serie.Regisseur = UpdateSerie.Regisseur;
            serie.Seizoen = UpdateSerie.Seizoen;
            serie.Afleveringen = UpdateSerie.Afleveringen;
            serie.Acteurs = UpdateSerie.Acteurs;
            serie.Afbeelding = UpdateSerie.Afbeelding;

            context.SaveChanges();
            return Ok(serie);
        }
    }
}
