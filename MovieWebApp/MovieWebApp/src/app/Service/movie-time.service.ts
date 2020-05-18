import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieTimeService {

  //get data form the api 
  getFilmData(){
    return this.http.get<Ifilm>("https://localhost:44356/film")
  }

  getSerieData(){
    return this.http.get<ISerie>("https://localhost:44356/serie")
  }

  getActeurData(){
    return this.http.get<IActeur>("https://localhost:44356/acteur")
  }

  //component maken in api van users
  getUserData(){
    return this.http.get<Iuser>("https://localhost:44356/user")
  }

//////////////////////////////////////////delete data form api 
//moet var toevoegen 
  deleteFilmData(tittle:string){
    return this.http.delete<Ifilm>(`https://localhost:44356/film/${tittle}`)
  }

  deleteSerie(tittle:string){
    return this.http.delete<ISerie>(`https://localhost:44356/film/${tittle}`)
  }
  
  deleteActeur(naam:string){
  return this.http.delete<IActeur>(`https://localhost:44356/film/${naam}`)
  }

  deleteUser(Username:string){
    return this.http.delete<Iuser>(`https://localhost:44356/film/${Username}`)
  }
///////////////////////////////////////////sending data 

sendFilmData(){
  return this.http.post<Ifilm>("")
}

sendSerieData(){
  return this.http.post<ISerie>("")
}

sendActorData(){
 return this.http.post<IActeur>("") 
}

sendUserData(){
  return this.http.post<Iuser>("")
}


  constructor(private http:HttpClient) { }

   
}

export interface Ifilm{
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