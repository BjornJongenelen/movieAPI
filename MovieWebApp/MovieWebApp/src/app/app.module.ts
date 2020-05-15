import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';
import { ActeurComponent } from './acteur/acteur.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    SerieComponent,
    ActeurComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "home", component : HomePageComponent},
      {path: "films", component : FilmComponent},
      {path: "series", component : SerieComponent},
      {path: "acteurs", component : ActeurComponent},
    ], {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
