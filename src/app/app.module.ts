import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ModalAgregarExpComponent } from './modales/modal-agregar-exp/modal-agregar-exp.component';
import { ModalProyectosAddComponent } from './modales/modal-proyectos-add/modal-proyectos-add.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './servicios/interceptor-service';
import { ModalEditarSobreMiComponent } from './modales/modal-editar-sobre-mi/modal-editar-sobre-mi.component';
import { ModalEditarExpComponent } from './modales/modal-editar-exp/modal-editar-exp.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalEditarEduComponent } from './modales/modal-editar-edu/modal-editar-edu.component';
import { ModalAddSkillComponent } from './modales/modal-add-skill/modal-add-skill.component';
import { ModalEditarSkillComponent } from './modales/modal-editar-skill/modal-editar-skill.component';
import { ModalEditarProyComponent } from './modales/modal-editar-proy/modal-editar-proy.component';
import { ModalRedAddComponent } from './modales/modal-red-add/modal-red-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavbarComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    IndexComponent,
    Pagina404Component,
    ProyectosComponent,
    SobreMiComponent,
    LoginComponent,
    ModalLoginComponent,
    BannerComponent,
    ModalAgregarExpComponent,
    ModalProyectosAddComponent,
    ModalEditarSobreMiComponent,
    ModalEditarExpComponent,
    ModalEducacionComponent,
    ModalEditarEduComponent,
    ModalAddSkillComponent,
    ModalEditarSkillComponent,
    ModalEditarProyComponent,
    ModalRedAddComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,})
  ],
  providers: [
    interceptorProvider
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
