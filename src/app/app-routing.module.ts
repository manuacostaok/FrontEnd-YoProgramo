import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ModalEditarEduComponent } from './modales/modal-editar-edu/modal-editar-edu.component';
import { ModalEditarExpComponent } from './modales/modal-editar-exp/modal-editar-exp.component';
import { ModalEditarProyComponent } from './modales/modal-editar-proy/modal-editar-proy.component';
import { ModalEditarSkillComponent } from './modales/modal-editar-skill/modal-editar-skill.component';
import { ModalEditarSobreMiComponent } from './modales/modal-editar-sobre-mi/modal-editar-sobre-mi.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';


//las rutas van ordenandas, al final va el error, primero el index 
const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'login', component: LoginComponent },
  {path: 'editSobreMi/:id', component: ModalEditarSobreMiComponent},
  {path: 'editExperiencia/:id', component: ModalEditarExpComponent},
  {path: 'editEducacion/:id', component: ModalEditarEduComponent},
  {path: 'editHabilidad/:id', component: ModalEditarSkillComponent},
  {path: 'editProyecto/:id', component: ModalEditarProyComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'**', component: Pagina404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
