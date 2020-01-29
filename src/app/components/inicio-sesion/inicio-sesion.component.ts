import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit, OnDestroy {

inicioSesionFrom: FormGroup;

  constructor() { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario(){
    this.inicioSesionFrom = new FormGroup({
      nombreUsuario: new FormControl('Daniel'),
      password: new FormControl('Osorio')
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class. 
  }
}
