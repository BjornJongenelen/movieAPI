import { Component, OnInit } from '@angular/core';
import { MovieTimeService, Ifilm } from '../Service/movie-time.service';
import { Subscriber, from } from 'rxjs';
import{ JsonPipe } from '@angular/common'
import { SafeStyle } from '@angular/platform-browser';

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

  remove:string
  ShowAdd:boolean
  zoek:string
  constructor(private svc: MovieTimeService) { 
  this.ShowAdd = false
  }

   sendData(){
    this.film.Tittel = this.tittel
    this.film.Genre = this.genre
    this.film.Regisseur = this.regisseur

    console.log(this.film)
    this.svc.sendFilmData(this.film).subscribe()
  }

  AddMovie(){
    this.ShowAdd = !this.ShowAdd
    if(this.ShowAdd == true)
    document.getElementById("AddMovie").innerHTML = "Show less"

    if(this.ShowAdd == false)
    document.getElementById("AddMovie").innerHTML = "Show more"
  }

  getAllData(){
    console.log("fetch data")
    this.svc.getFilmData().subscribe(result=> {

      this.film = result
      console.log("request recieveds")
      console.log(result)
      console.log(this.film.Tittel)
    })
  }

  deleteMovie(){
    this.svc.deleteFilmData(this.remove).subscribe()

  }

  ngOnInit(): void {

  }
    
}
