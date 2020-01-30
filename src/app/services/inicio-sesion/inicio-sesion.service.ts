import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InicioSesion } from 'src/app/dto/inicio-sesion';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

   // Constructor por defecto sirve asi
  /**constructor(http: HttpClient) {
    this.http = http;
  }**/

  constructor(private http: HttpClient) {}

  iniciarSesion(formularioCompleto: any): Observable<InicioSesion> {
    formularioCompleto.token = 'ASDF1233432QSDA';
    return this.http.post<InicioSesion>('http://my-json-server.typicode.com/brayan1119/curso-angular/login', formularioCompleto);
  }

}
