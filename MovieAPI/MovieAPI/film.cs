using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI
{
    public class film
    {

        [Key]

        [Required]
        [StringLength(50)]
        public string Tittel { get; set; }

        public string Genere { get; set; }

        public string Acteurs { get; set; }

        public int Speelduur { get; set; }

        [Required]
        [MaxLength(4)]
        public int Jaar { get; set; }

        public bool Oscar { get; set; }
        [Required]
        [StringLength(50)]
        public string Regisseur { get; set; }

        public string Afbeelding { get; set; }

        //[Required]
        //[StringLength(2000)]
        //public string description { get; set; }



    }
}
