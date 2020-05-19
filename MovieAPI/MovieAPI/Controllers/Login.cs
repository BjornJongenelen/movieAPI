using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Model;

namespace MovieAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class Login : Controller
    {
        [HttpGet]
        public IActionResult Authentication([FromHeader]string authorizatie)
        {
            var credentials = authorizatie;
            Console.WriteLine(credentials);
            if (!string.IsNullOrEmpty(credentials))
            {
                return Ok("u bent ingelogd");
            }
            Response.Headers.Add("WWW-Authenticate","Basic" );

            return Unauthorized();
        }

        private readonly MovieTimeContext context;
        public Login(MovieTimeContext context)
        {
            this.context = context;
        }

        //send data
        [HttpPost]
        public IActionResult addFilm([FromBody] login newGebruiker)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.login.Add(newGebruiker);
            context.SaveChanges();
            return Created("", newGebruiker);
        }

    }
}
