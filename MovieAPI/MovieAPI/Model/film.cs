using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI
{
    [Table("film")]
    public class film
    {
        [Key]
        public int id { get; set; }

        [Required]
        [StringLength(20)]
        public string Tittel { get; set; }

        public string Genre { get; set; }

        public acteur Acteur { get; set; }

        public int Speelduur { get; set; }

        [Required]
        public int Jaar { get; set; }

        public bool Oscar { get; set; }

        [Required]
        public acteur Regisseur { get; set; }


    }
}
