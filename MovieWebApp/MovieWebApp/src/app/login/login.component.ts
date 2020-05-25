import { Component, OnInit } from '@angular/core';
import { MovieTimeService } from '../Service/movie-time.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth: MovieTimeService) { }

  ngOnInit(): void {
    this.auth.BasicLogin()
  }

  LoginUser(event){
    event.preventDefault()
    const target = event.target
    const Username = target.querySelector("#Username").value
    const Password = target.querySelector("#Password").value
    console.log(Username,Password)
  }
}
