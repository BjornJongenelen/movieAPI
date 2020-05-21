import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Service/app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { SerieComponent } from './serie/serie.component';
import { ActeurComponent } from './acteur/acteur.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    SerieComponent,
    ActeurComponent,
    HomePageComponent,
    LoginComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "home", component : HomePageComponent},
      {path: "films", component : FilmComponent},
      {path: "series", component : SerieComponent},
      {path: "acteurs", component : ActeurComponent},
      {path: "login", component : LoginComponent},
      {path : "admin", component: AdminComponent},
    ], {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
