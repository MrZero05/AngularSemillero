import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { EncabezadoComponent } from './plantilla/encabezado/encabezado.component';
import { PieDePaginaComponent } from './plantilla/pie-de-pagina/pie-de-pagina.component';
import { PlantillaComponent } from './plantilla/plantilla.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full' },
  {path: 'main', component: PaginaPrincipalComponent },
  {path: 'login', component: InicioSesionComponent},
  {path: 'header', component: EncabezadoComponent},
  {path: 'footer', component: PieDePaginaComponent},
  {path: 'layout', component: PlantillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
