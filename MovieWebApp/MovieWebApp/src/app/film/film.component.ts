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
  }

  ngOnInit(): void {
  }

}
