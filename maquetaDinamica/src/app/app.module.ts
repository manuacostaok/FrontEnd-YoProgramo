import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { LogoutComponent } from './componentes/logout/logout.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ModalLogoutComponent } from './modales/modal-logout/modal-logout.component';

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
    LogoutComponent,
    ModalLoginComponent,
    BannerComponent,
    ModalLogoutComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
