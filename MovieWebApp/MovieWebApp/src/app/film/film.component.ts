import { Component, OnInit } from '@angular/core';
import { MovieTimeService, Ifilm, IActeur } from '../Service/movie-time.service';
import { TheMovieDatabaseService , Pagina, IResult} from '../Service/the-movie-database.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film: Ifilm = new Ifilm
  SliderFilm: Pagina = new Pagina
  Addacteur: IActeur = new IActeur
  

  tittel: string
  genre : string
  acteur : string
  regisseur: string
  jaar : string
  oscar: string
  speelduur : string

  del:number
  ShowAdd:boolean
  shworesult: boolean
  zoek:string

  movieList;
  filmDatalijst;
  acteurlijst;

  constructor(private svc: MovieTimeService , private TMdb: TheMovieDatabaseService) { 
  this.ShowAdd = false
 
  }

  ngOnInit(): void {

    this.getAllData()
    this.GetApiData()

  }

   sendData(){
    this.film.Tittel = this.tittel
    this.film.Genre = this.genre
    this.film.Acteur={naam:null}
    this.film.Acteur.naam = this.acteur
    this.film.Regisseur={naam:null}
    this.film.Regisseur.naam =this.regisseur
    this.film.Jaar = parseInt(this.jaar)
    this.film.Oscar = JSON.parse(this.oscar)
    this.film.Speelduur = parseInt(this.speelduur)

   
    console.log(this.film)
    this.svc.sendFilmData(this.film).subscribe()
    
  }

  GetApiData(){
    console.log("new database")
    this.TMdb.getFilmDetails().subscribe(result=>{
     this.filmDatalijst = result.results
     console.log(this.filmDatalijst)
   })
  }

  getAllData(){
    console.log("fetch data")
    this.movieList = this.svc.getFilmData().subscribe(result=> {
      console.log("request recieveds")
      console.log(result)
      this.movieList=result
    })
  }

  search(){
    console.log(this.zoek)
    this.movieList= this.svc.searchFilm(this.zoek).subscribe(result=> {
    this.movieList=result
    console.log(result)

    if(this.movieList.length==0)
      window.alert("ERROR ingegeven term bestaat niet ! \n tip: let op hoofdletters!")
    else
    window.scrollBy(0, 1500);

    })
  
  }

  deleteMovie(id){
    this.del = parseInt(id)
    this.svc.deleteFilmData(this.del).subscribe()
    location.reload()
  }



  ShowAddMovie(){
    this.ShowAdd = !this.ShowAdd
    if(this.ShowAdd)
    document.getElementById("AddMovie").innerHTML = "back"
    else
    document.getElementById("AddMovie").innerHTML = "Add new movie"
  }
    
  getActeurs(){
    console.log("fetch data")
    this.svc.getActeurData().subscribe(result=> {
      console.log("request recieveds")
      console.log(result)
      this.acteurlijst=result
    })
  }

}
