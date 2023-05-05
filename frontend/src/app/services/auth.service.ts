import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterUser } from './../components/register/registerUser';
import { LoginUser } from './../components/login/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    path = environment.apiUrl;
    TOKEN_KEY = 'token';
    register(registerUser:RegisterUser){
      const headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      this.http.post(`${this.path}/user/register`,registerUser, {headers:headers}).subscribe(data => 
        {
          console.log(data);
        });
    }
    login(loginUser:LoginUser){
      const headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      this.http.post(`${this.path}/user/login`,loginUser, {headers:headers}).subscribe((data:any) => 
        {
          this.saveToken(data.token);
        });
    }

    saveToken(token:any)  {
      localStorage.setItem(this.TOKEN_KEY,token);
    }

    logOut(){
      localStorage.removeItem(this.TOKEN_KEY);
    }

    get isAuthenticated(){
      return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get token(){
      return localStorage.getItem(this.TOKEN_KEY);
    }
}
