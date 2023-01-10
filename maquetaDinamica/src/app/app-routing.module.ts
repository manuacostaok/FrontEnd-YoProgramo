import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';

//las rutas van ordenandas, al final va el error, primero el index 
const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'login', component: LoginComponent },
  {path:'experiencia', component: ExperienciaComponent},
  {path:'estudios', component: EducacionComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'**', component: Pagina404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
