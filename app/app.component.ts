import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { debug } from 'util';

@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public info: string = "Welt";

    constructor(private oauthService: OAuthService) {

        /*// URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + "/index.html";
 
        // The SPA's id. The SPA is registerd with this id at the auth-server
        this.oauthService.clientId = "spa-demo";
 
        // set the scope for the permissions the client should request
        // The first three are defined by OIDC. The 4th is a usecase-specific one
        this.oauthService.scope = "openid profile email voucher";
 
        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;
 
        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);

        this.oauthService.issuer = 'https://steyer-identity-server.azurewebsites.net/identity';

        // Set a dummy secret
        // Please note that the auth-server used here demand the client to transmit a client secret, although
        // the standard explicitly cites that the password flow can also be used without it. Using a client secret
        // does not make sense for a SPA that runs in the browser. That's why the property is called dummyClientSecret
        // Using such a dummy secreat is as safe as using no secret.
        this.oauthService.dummyClientSecret = "geheim";

        // Load Discovery Document and then try to login the user
        this.oauthService.loadDiscoveryDocument().then(() => {
 
            // This method just tries to parse the token(s) within the url when
            // the auth-server redirects the user back to the web-app
            // It dosn't send the user the the login page
            this.oauthService.tryLogin({});      
 
        });*/
        /* Implicit Flow without discovery document*/
        // Login-Url https://apimdev.cloudapp.net:9443/oauth2/authorize
        // https://iam.ilumno.com:9443/oauth2/authorize
        //this.oauthService.loginUrl = "https://iam.ilumno.com:9443/oauth2/authorize"; //Id-Provider?
        this.oauthService.loginUrl = "https://kcq-iamapp01.ilumno.net:9443/oauth2/authorize"; //Id-Provider?

        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + "/index.html";

        // The SPA's id. Register SPA with this id at the auth-server
        this.oauthService.clientId = "tb79f9QZ4j77P3kqSwCnZVVTd9ga";
                                     
        // set the scope for the permissions the client should request
        this.oauthService.scope = "openid";

        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;
        
        debugger;

        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);

        // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
        //this.oauthService.logoutUrl = "https://iam.ilumno.com:9443/oidc/logout";
        this.oauthService.logoutUrl = "https://kcq-iamapp01.ilumno.net:9443/oidc/logout";

        // This method just tries to parse the token(s) within the url when
        // the auth-server redirects the user back to the web-app
        // It dosn't send the user the the login page
        this.oauthService.tryLogin({});

    }

}



