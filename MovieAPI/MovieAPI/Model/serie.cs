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
        [StringLength(20)]
        public string Tittel { get; set; }

        public string Genre { get; set; }
        
        // hoofdrol spelers 
        public acteur Acteurs { get; set; }

        public int Seizoen { get; set; }

        public int Afleveringen { get; set; }

        [Required]
        public acteur Regisseur { get; set; }




    }
}
