using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MovieAPI.Controllers
{
    public class Movie : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
