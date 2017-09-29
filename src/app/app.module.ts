import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaComponent } from './components/pagina/pagina.component';

import {BASE_URL} from "./app.tokens";
import { OAuthModule } from "angular-oauth2-oidc";

import { appRouting } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    appRouting
  ],
  providers: [
    { provide: BASE_URL, useValue: "https://hpg-keycloak.northeurope.cloudapp.azure.com:8443"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
