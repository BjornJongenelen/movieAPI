import { Component, OnInit } from '@angular/core';
import { MovieTimeService, Ifilm } from '../Service/movie-time.service';
import { Subscriber, from } from 'rxjs';
import{ JsonPipe } from '@angular/common'
import { SafeStyle } from '@angular/platform-browser';
import { flatten } from '@angular/compiler';

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

  delete:string
  ShowAdd:boolean
  ShowRemove:boolean
  zoek:string

  id: number
  movieList;
  constructor(private svc: MovieTimeService) { 
  this.ShowAdd = false
  this.ShowRemove = false
  }

   sendData(){
    this.film.Tittel = this.tittel
    this.film.Genre = this.genre
    this.film.Regisseur = this.regisseur
    this.film.Acteur = this.acteur
    this.film.Oscar = JSON.parse(this.oscar)
    this.film.Speelduur = parseInt(this.speelduur)
    this.film.Jaar = parseInt(this.jaar)

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

  deleteMovie(){
    
    this.id = parseInt(this.delete)
    this.svc.deleteFilmData(this.id).subscribe()

  }

  search(){

  }

  ShowAddMovie(){
    this.ShowAdd = !this.ShowAdd
    this.ShowRemove = false
  }
    
  ShowRemoveMovie(){
   this.ShowRemove = !this.ShowRemove
   this.ShowAdd = false
  }
}
