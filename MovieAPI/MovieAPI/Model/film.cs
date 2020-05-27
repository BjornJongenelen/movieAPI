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
        //[StringLength(50)]
        public string Tittel { get; set; }

        public string Genre { get; set; }

        public string Acteur { get; set; }

        public int Speelduur { get; set; }

        [Required]
        //[MaxLength(4)]
        public int Jaar { get; set; }

        public bool Oscar { get; set; }

        [Required]
        //[StringLength(50)]
        public string Regisseur { get; set; }


        //public string Afbeelding { get; set; }

        //[Required]
        //[StringLength(2000)]
        //public string description { get; set; }

  

    }
}
