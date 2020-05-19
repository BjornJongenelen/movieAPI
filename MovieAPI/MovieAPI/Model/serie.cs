using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace MovieAPI
{
    [Table("serie")]
    public class serie
    {
        [Key]
        public int id { get; set; }

        [Required]
        //[StringLength(50)]
        public string Tittel { get; set; }

        public string Genre { get; set; }
        
        //list van hoofdrol spelers 
        public string Acteurs { get; set; }

        public int Seizoen { get; set; }

        public int Afleveringen { get; set; }

        [Required]
        //[MaxLength(50)]
        public string Regisseur { get; set; }

        public string Afbeelding { get; set; }


    }
}
