import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { RegisterUser } from './registerUser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthService) { }
  registerUser:any = {

  };
  ngOnInit(): void {
  }
  register(registerUser:RegisterUser){
    this.authService.register(registerUser);
  }

}
