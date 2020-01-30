import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

   // Constructor por defecto sirve asi
  /**constructor(http: HttpClient) {
    this.http = http;
  }**/

  constructor(private http: HttpClient) {}

  iniciarSesion(formularioCompleto: any): Observable<any> {
    formularioCompleto.token = 'ASDF1233432QSDA';
    return this.http.post('http://my-json-server.typicode.com/brayan1119/curso-angular/login', formularioCompleto);
  }

}
