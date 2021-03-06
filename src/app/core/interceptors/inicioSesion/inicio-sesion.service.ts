import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InicioSesionService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    const token = sessionStorage.getItem('token');
    let reqClone: any;
    if (token) {
      reqClone = req.clone({ headers: new HttpHeaders({ token }) });
      return next.handle(reqClone);
    } else {
      this.router.navigate(['/inicio-sesion']);
    }
  }
}
