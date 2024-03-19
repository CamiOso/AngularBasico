import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { librosService } from './services/libros.service';
import { InicioComponent } from './inicio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
    RegistrarComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [librosService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
