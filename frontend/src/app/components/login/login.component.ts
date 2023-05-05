import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  
  constructor(private authService:AuthService) { }
  loginUser:any ={}
  ngOnInit(): void {}

  login(loginUser:any) {
    this.authService.login(loginUser);
  }

}
