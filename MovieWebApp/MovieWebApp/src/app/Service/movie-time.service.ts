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

  deleteFilmData(tittle:number){
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

sendFilmData(film : Ifilm){
  return this.http.post<Ifilm>(`https://localhost:44356/film`,film)
}

sendSerieData(serie: ISerie){
  return this.http.post<ISerie>(`https://localhost:44356/serie`,serie)
}

sendActorData(acteur : IActeur){
 return this.http.post<IActeur>(`https://localhost:44356/acteur`, acteur) 
}

sendUserData(user : Iuser){
  return this.http.post<Iuser>(`https://localhost:44356/user`,user)
}

//////////////////////////////////////////////////update data


  constructor(private http:HttpClient) { }
}

export class Ifilm{
  Tittel:string;
  Genre: string;
  Acteur : string;
  Regisseur : string;
  Jaar : number;
  Oscar: boolean;
  Speelduur:number;
}

export class ISerie{
  tittel:string;
  genre:string;
  acteurs: string;
  jaar : number;
  seizoen:number;
  afleveringen : number;
  regisseur : string;
}

export class IActeur{
  naam:string;
  leeftijd: number;
  geboortedatum:Date;
  nationaliteit:string;
  oscar:number;
}

export class Iuser{
  Username:string;
  Password:string;
  ID:number;
  Email:string;
}