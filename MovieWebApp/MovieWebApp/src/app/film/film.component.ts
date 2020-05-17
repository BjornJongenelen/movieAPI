import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  tittle:string
  genre: string
  regisseur:string
  jaar:number 
  oscar:number
  speelduur:number

  constructor() { }

  sendData(){
   console.log("heloeeeeee")
   console.log(this.tittle) 
   console.log(this.genre)
   console.log(this.regisseur)
   console.log(this.jaar)
   console.log(this.oscar)
   console.log(this.speelduur)     
  }

  ngOnInit(): void {
  }

}
