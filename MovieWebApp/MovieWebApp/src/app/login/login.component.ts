import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username:string
  Password:string
  email:string


  constructor() { }

  ngOnInit(): void {
  }

  LoginUser(){
    console.log("yaaaaaaas")
  }
}
