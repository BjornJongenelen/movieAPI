import { Component, OnInit } from '@angular/core';
import { MovieTimeService, Ifilm } from '../Service/movie-time.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film:Ifilm = new Ifilm

  tittel:string
  genre:string
  acteur:string
  regisseur:string
  jaar:string
  oscar:string
  speelduur:string

  constructor(private svc: MovieTimeService) { 

  }

   sendData(){
   
    console.log(this.oscar)

  }



  ngOnInit(): void {
  }

}
