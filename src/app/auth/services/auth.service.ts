import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Keycloak from 'keycloak-js';
import { environment } from 'src/app/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keycloak: Keycloak;

  constructor(
      private router: Router,
    ) { this.keycloak = new Keycloak({
      url: environment.authUrl,
      realm: environment.realm,
      clientId: environment.clientId,
    }); }

  init(): Promise<boolean> {
   

    return this.keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
      pkceMethod: 'S256',
      flow: 'standard', 
    });
  }

  getkeycloak(): Keycloak {
    return this.keycloak;
  }

  getRoles(): string[] {
    const roles = this.getkeycloak().tokenParsed?.realm_access?.roles;
    if (roles) {
      return roles;
    }
    return [];
  }

  isAuthenticated(): boolean {
    const keycloak = this.getkeycloak?.();
    if (keycloak?.authenticated) {
      return true;
    }
    return false;
  }
  
  logout() {
    this.getkeycloak().logout();
  }

}
 