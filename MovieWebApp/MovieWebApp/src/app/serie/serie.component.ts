import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  tittle:string
  genre: string
  regisseur:string
  jaar:number
  seizoen:number 
  aflevering:number

  constructor() { }

  sendData(){
   console.log("heloeeeeee")
   console.log(this.tittle) 
   console.log(this.genre)
   console.log(this.regisseur)
   console.log(this.seizoen)
   console.log(this.aflevering)    
  }
  ngOnInit(): void {
  }

}
