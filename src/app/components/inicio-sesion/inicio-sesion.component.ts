import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

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
      nombreUsuario: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      password: new FormControl(null)
    })
  }

  enviarFormulario(){
    console.log('formulario', this.inicioSesionFrom.value);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class. 
  }
}
