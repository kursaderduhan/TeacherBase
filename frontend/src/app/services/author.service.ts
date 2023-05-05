import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Author } from '../components/author/author';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
    path = environment.apiUrl;
    getAuthors():Observable<Author[]>{
      return this.http.get<Author[]>(`${this.path}/authors`)
    }
}
