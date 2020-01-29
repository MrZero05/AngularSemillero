import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

   // Constructor por defecto sirve asi
  /**constructor(http: HttpClient) {
    this.http = http;
  }**/

  constructor(private http: HttpClient){}

  iniciarSesion() {
    this.http.get('');
  }
}
