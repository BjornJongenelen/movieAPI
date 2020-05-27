import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDatabaseService {

  constructor(private http:HttpClient) { }

  getFilmDetails(){
    return this.http.get<Pagina>("https://api.themoviedb.org/3/trending/movie/week?api_key=a836f37f45d7f23eaf59255acf2838fa")
  }
}

//prop get trending  https://developers.themoviedb.org/3/trending/get-trending
export class IResult {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  media_type: string;
}

export class Pagina {
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
}
