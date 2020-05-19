using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI
{
    [Table("acteur")]
    public class acteur
    {
        [Key]
        public int id { get; set; }

        public string Naam { get; set; }
        public int Leeftijd { get; set; }
        public int GeboorteDatum { get; set; }
        public string Nationaliteit { get; set; }
        public int Oscars { get; set; }

    }
  }
