using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI
{
    public class movie
    {


        public string Naam { get; set; }

        public string[] Genere { get; set; }

        public int Speelduur { get; set; }

        public int Jaar { get; set; }

        public bool Oscar { get; set; }

        public int AantalOscar { get; set; }

        public string Regiseur { get; set; }

        public string Image { get; set; }



    }
}
