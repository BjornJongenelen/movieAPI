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

        [StringLength(20)]
        public string Naam { get; set; }

        public int Leeftijd { get; set; }
        
        public DateTime GeboorteDatum { get; set; }

        [StringLength(20)]
        public string Nationaliteit { get; set; }

        public int Oscars { get; set; }

    }
  }
