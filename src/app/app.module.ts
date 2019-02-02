// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { AppComponent } from './app.component';


// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';
import { CommonModule } from '@angular/common';

// Servicios



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTES, FormsModule, PagesModule, ServiceModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
