import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  getRefreshToken(){
    const refreshToken = localStorage.getItem('refreshToken')  || "";
    return refreshToken;
  }

  getAccessToken(){
    const accessToken = localStorage.getItem('accessToken')  || "";
    return accessToken;
  }

  getToken(){
    const strToken = localStorage.getItem('token');
    const token = JSON.parse(strToken || "");

    return token;
  }

  SaveTokens(tokenData: any){
    localStorage.setItem('refreshToken', tokenData.refreshToken);
    localStorage.setItem('accessToken', tokenData.accessToken);
    localStorage.setItem('token', JSON.stringify(tokenData));
  }

  getRoles(){
    const accessToken = localStorage.getItem('accessToken') || '';

    const decodedToken: any = jwt_decode(accessToken);

    const roles: string[] = decodedToken.realm_access?.roles || [];

    return roles;
  }
}


function jwt_decode(accessToken: string): any {
  throw new Error('Function not implemented.');
}

