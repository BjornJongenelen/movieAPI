import { Component, OnInit } from '@angular/core';
import { MovieTimeService, ISerie, IActeur } from '../Service/movie-time.service';
import { TheMovieDatabaseService } from '../Service/the-movie-database.service';



@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

serie:ISerie = new ISerie
Addacteur:IActeur = new IActeur

  tittel: string
  genre : string
  acteur : string
  regisseur: string
  jaar : string
  seizoen: string
  afleveringen : string

  del:number
  ShowAdd:boolean
  zoek:string

  id: number

  serieList;
  serieDatalijst;
  acteurlijst;
  

  constructor( private svc:MovieTimeService , private TMdb:TheMovieDatabaseService) { 
    this.ShowAdd = false
  }
  
  ngOnInit(): void {
    this.getAllData()
    this.GetApiData()
  }

  sendData(){
    this.serie.tittel = this.tittel
    this.serie.genre = this.genre
    this.serie.acteurs ={naam:null}
    this.serie.acteurs.naam = this.acteur
    this.serie.regisseur ={naam:null}
    this.serie.regisseur.naam =this.regisseur
    this.serie.afleveringen = parseInt(this.afleveringen)
    this.serie.seizoen = parseInt(this.seizoen)

    console.log(this.serie)
    this.svc.sendSerieData(this.serie).subscribe()
    location.reload()
    
  }

  getAllData(){
    console.log("fetch data")
    this.serieList = this.svc.getSerieData().subscribe(result=> {
      console.log("request recieveds")
      console.log(result)
      this.serieList=result

      if(this.serieList.length==0)
      window.alert("ERROR ingegeven term bestaat niet ! \n tip: let op hoofdletters!")
    else
    window.scrollBy(0, 1500);


    })
  }

  search(){
    console.log(this.zoek)
    this.serieList= this.svc.searchSerie(this.zoek).subscribe(result=> {
    this.serieList=result
    console.log(result)
    })
    window.scrollBy(0, 1500);
  }

  GetApiData(){
    console.log("new database")
    this.TMdb.getSerieDetails().subscribe(result=>{
     this.serieDatalijst = result.results
     console.log(this.serieDatalijst)
   })
  }

  deleteSerie(id){
    this.del = parseInt(id)
    this.svc.deleteFilmData(this.del).subscribe()
    location.reload()
  }

  ShowAddSerie(){
    this.ShowAdd = !this.ShowAdd
    if(this.ShowAdd)
    document.getElementById("AddSerie").innerHTML = "back"
    else
    document.getElementById("AddSerie").innerHTML = "Add new movie"
  }

  getActeurs(){
    console.log("fetch data")
    this.svc.getActeurData().subscribe(result=> {
      console.log("request recieveds")
      console.log(result)
      this.acteurlijst=result
    })
  }

}
