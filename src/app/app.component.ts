import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  public info: string = "Welt";
  
      constructor(private oauthService: OAuthService) {
        
        this.oauthService.loginUrl = "https://iam.ilumno.com:9443/oauth2/authorize"; //Id-Provider?
        
                // URL of the SPA to redirect the user to after login
                this.oauthService.redirectUri = window.location.origin + "/index.html";
        
                // The SPA's id. Register SPA with this id at the auth-server
                this.oauthService.clientId = "2ubSMuYIORmBqNK01qxs4EZOQ0Ea";
        
                // set the scope for the permissions the client should request
                this.oauthService.scope = "openid";
        
                // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
                // OAuth2-based access_token
                this.oauthService.oidc = true;
        
                // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
                // instead of localStorage
                this.oauthService.setStorage(sessionStorage);
        
                // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
                this.oauthService.logoutUrl = "https://iam.ilumno.com:9443/oidc/logout";
        
                // This method just tries to parse the token(s) within the url when
                // the auth-server redirects the user back to the web-app
                // It dosn't send the user the the login page
                this.oauthService.tryLogin({});
  
      }


}
