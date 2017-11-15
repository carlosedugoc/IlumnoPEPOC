import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import { Router } from "@angular/router";
import { debug } from 'util';

@Component({
    selector:'app-home',
    templateUrl:'home.component.html'
})
export class HomeComponent implements OnInit {

    userName: string;
    password: string;
    loginFailed: boolean = false;

    constructor(private oauthService: OAuthService, private router:Router) {
        let token = sessionStorage.getItem('access_token')
        console.log('token',token)
        if (token){
            this.router.navigate(['ilumno'])
        }
        else
        {
            this.login()
        }
    }

    login() {
        this.oauthService.clientId = "tb79f9QZ4j77P3kqSwCnZVVTd9ga";
        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get givenName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name;
    }

    loginWithPassword() {

        this.oauthService.clientId = "tb79f9QZ4j77P3kqSwCnZVVTd9ga";

        this
            .oauthService
            .fetchTokenUsingPasswordFlowAndLoadUserProfile(this.userName, this.password)
            .then(() => {
                console.debug('successfully logged in');
                this.loginFailed = false;
            })
            .catch((err) => {
                console.error('error logging in', err);
                this.loginFailed = true;
            })
            .then(() => {
                this.oauthService.clientId = "angular-app-1";
            })
    }

    ngOnInit() { 


    }

}