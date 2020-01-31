import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../dto/usuarios';
import { PaginaPrincipalService } from '../../services/pagina-principal/pagina-principal.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  listaUsers: Usuarios;
  cedula: string;

  constructor(private paginaPrincipalService: PaginaPrincipalService) { }

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.paginaPrincipalService.getUsuarios().subscribe(datos => {
      console.log('lista usuarios:', datos);
      this.listaUsers = datos;
      }, error => {
        console.error(error);
      }, () => {
        console.log('complete');
      }
    );
  }

}
