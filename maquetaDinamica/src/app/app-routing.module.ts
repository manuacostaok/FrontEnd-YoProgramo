import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';

//las rutas van ordenandas, al final va el error, primero el index 
const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'trabajos', component: TrabajosComponent},
  {path:'**', component: Pagina404Component}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
