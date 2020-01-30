import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  listaEjemplo = [
    {
      nombre: 'Nacional'
    },
    {
      nombre: 'Pereira'
    },
    {
      nombre: 'Junior'
    },
    {
      nombre: 'Medellin'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
