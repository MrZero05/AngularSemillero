import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/dto/usuarios';

@Injectable({
  providedIn: 'root'
})
export class PaginaPrincipalService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios> {
    return this.http.get<Usuarios>('http://my-json-server.typicode.com/brayan1119/curso-angular/usuarios');
  }
}
