import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Service/app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';
import { ActeurComponent } from './acteur/acteur.component';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    SerieComponent,
    ActeurComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([

      {path: "films", component : FilmComponent},
      {path: "series", component : SerieComponent},
      {path: "acteurs", component : ActeurComponent},
      {path: "login", component : LoginComponent},
    ], {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
