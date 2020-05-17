import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieTimeService {

  getFilmData(){
    return this.http.get<Imovie>("")
  }

  getSerieData(){
    return this.http.get<ISerie>("")
  }

  getActorData(){
    return this.http.get<IActeur>("")
  }

  getUserData(){
    return this.http.get<Iuser>("")
  }

  constructor(private http:HttpClient) { }

   
}

export interface Imovie{
  tittel:string;
  genre: string;
  acteur : string;
  regisseur : string;
  jaar : number;
  oscar: number;
  speelduur:number;
}

export interface ISerie{
  tittel:string;
  genre:string;
  acteurs: string;
  jaar : number;
  seizoen:number;
  afleveringen : number;
  regisseur : string;
}

export interface IActeur{
  naam:string;
  leeftijd: number;
  geboortedatum:Date;
  nationaliteit:string;
  oscar:number;
}

export interface Iuser{
  Username:string;
  Password:string;
  ID:number;
  Email:string;
}