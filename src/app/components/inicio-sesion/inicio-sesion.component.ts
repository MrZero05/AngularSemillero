import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InicioSesionService } from '../../services/inicio-sesion/inicio-sesion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit, OnDestroy {

  inicioSesionFrom: FormGroup;

  constructor(private inicioSesionService: InicioSesionService) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.inicioSesionFrom = new FormGroup({
      nombreUsuario: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      password: new FormControl(null)
    })
  }

  enviarFormulario() {
    this.inicioSesionService.iniciarSesion(this.inicioSesionFrom.value).subscribe(datos =>
      console.log('datos', datos)
      , error => {
        console.error(error);
      }, () => {
        console.log('complete');
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class. 
  }
}
