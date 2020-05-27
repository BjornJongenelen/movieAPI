import { Component, OnInit } from '@angular/core';
import { MovieTimeService, Ifilm } from '../Service/movie-time.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film: Ifilm = new Ifilm

  tittel: string
  genre : string
  acteur : string
  regisseur: string
  jaar : string
  oscar: string
  speelduur : string

  del:number
  ShowAdd:boolean
  zoek:string

  id: number
  movieList;
  constructor(private svc: MovieTimeService) { 
  this.ShowAdd = false
 
  }

   sendData(){
    this.film.Tittel = this.tittel
    this.film.Genre = this.genre
    this.film.Acteur = this.acteur
    this.film.Regisseur =this.regisseur
    this.film.Jaar = parseInt(this.jaar)
    this.film.Oscar = JSON.parse(this.oscar)
    this.film.Speelduur = parseInt(this.speelduur)

    //location.reload()

    console.log(this.acteur, this.film.Acteur)
    console.log(this.film)
    this.svc.sendFilmData(this.film).subscribe()
    
  }

  ngOnInit(): void {
    this.getAllData()
    
  }

  getAllData(){
    console.log("fetch data")
    this.movieList = this.svc.getFilmData().subscribe(result=> {

      console.log("request recieveds")
      console.log(result)
      this.movieList=result
    })
  }

  deleteMovie(id){
    
    this.del = parseInt(id)
    this.svc.deleteFilmData(this.del).subscribe()
    location.reload()
  }

  search(){

  }

  ShowAddMovie(){
    this.ShowAdd = !this.ShowAdd
    if(this.ShowAdd)
    document.getElementById("AddMovie").innerHTML = "back"
    else
    document.getElementById("AddMovie").innerHTML = "Add new movie"
  }
    
}
