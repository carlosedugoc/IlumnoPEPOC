import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BASE_URL} from "./app.tokens";
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import { OAuthModule } from 'angular-oauth2-oidc';
import {IlumnoComponent} from "./ilumno/ilumno.component";
import { APP_CONFIG, AppConfig } from './app.config';
import { DomseguroPipe } from "./ilumno/domseguro.pipe";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        AppRouterModule,
        OAuthModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        IlumnoComponent,
        DomseguroPipe
    ],
    providers: [
        { provide: BASE_URL, useValue: "https://hpg-keycloak.northeurope.cloudapp.azure.com:8443"},
        { provide: APP_CONFIG, useValue: AppConfig }
    ],
    bootstrap: [
        AppComponent

    ]
})
export class AppModule {
}