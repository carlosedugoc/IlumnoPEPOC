import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  loginFailed: boolean = false;
  token: string;

  constructor(private oauthService: OAuthService ,
                private router:Router) {
  }

  login() {
      this.oauthService.clientId = "OGpL7XMHGjeTfmXmKrvXfRrFWO4a";

      this.oauthService.initImplicitFlow();
  }

  logout() {
      this.oauthService.logOut();
  }

  get givenName() {
    //   this.oauthService.clientId = "OGpL7XMHGjeTfmXmKrvXfRrFWO4a";
    //   this.oauthService.loginUrl="https://iam.ilumno.com:9443/oauth2/authorize"
    console.log(claims)
    
      var claims = this.oauthService.getIdentityClaims();
      if (!claims) return null;
      console.log(claims)
      //return claims.given_name;
  }

  loginWithPassword() {

    //   this.oauthService.clientId = "OGpL7XMHGjeTfmXmKrvXfRrFWO4a";
        console.log(this.userName, this.password)
      this
          .oauthService
          .fetchTokenUsingPasswordFlowAndLoadUserProfile(this.userName, this.password)
          .then(() => {
              console.debug('successfully logged in');
              this.loginFailed = false;
              this.router.navigate(['pagina'])
          })
          .catch((err) => {
              console.error('error logging in', err);
              this.loginFailed = true;
          })
          .then(() => {
              this.oauthService.clientId = "OGpL7XMHGjeTfmXmKrvXfRrFWO4a";
          })
  }

// public loginWithPassword() {
//     console.log("password flow");
//     console.log(this.userName);
//     console.log(this.password);

//     this.oauthService.loginUrl = "https://iam.ilumno.com:9443/oauth2/authorize"
//     this.oauthService.clientId = "OGpL7XMHGjeTfmXmKrvXfRrFWO4a";
//     this.oauthService.scope = "openid";
//     this.oauthService.oidc = true;
//     this.oauthService.setStorage(sessionStorage);
//     console.log(this.oauthService);

//     this.oauthService.fetchTokenUsingPasswordFlow(this.userName, this.password).then(
//         result => {
//             this.token = this.oauthService.getAccessToken();
//             console.log(this.token)
//         },
//         error => {
//             console.log(error);
//             this.token = error;
//         })
// }


SiguientePagina(){
    this.router.navigate(['pagina'])
}

  ngOnInit() {
  }

}
