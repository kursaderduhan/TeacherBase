import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>, next:HttpHandler): 
  Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    if(authService.isAuthenticated){
    const authRequest = req.clone({
      headers: req.headers.set(
        'authorization',
        'token '+authService.token
        )
    })
    return next.handle(authRequest);
  }
  return next.handle(req);
  }
}
