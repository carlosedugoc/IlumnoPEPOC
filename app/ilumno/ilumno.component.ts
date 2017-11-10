import { Component, OnInit } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { IlumnoService } from "./ilumno.service";
import { OAuthService } from "angular-oauth2-oidc";
import { debug } from 'util';

@Component({
    selector: 'app-ilumno',
    templateUrl: 'ilumno.component.html',
    providers: [IlumnoService]
})
export class IlumnoComponent implements OnInit {
    url: string

    constructor(private oauthService: OAuthService, private is: IlumnoService) {
        debugger;
        this.url = is.gerURL()
    }

    ngOnInit() {

    }

    logout() {
        this.oauthService.logOut(false);
    }
}