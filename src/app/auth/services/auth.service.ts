import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';
import { Router } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { TokenService } from './token.service';
import { AlertService } from 'src/app/core/service/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpointToken = environment.authUrl;
  private realm = environment.realm;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private alertService: AlertService
  ) { }

  async loginAuth(username: string, password: string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('client_id', 'heimdall-app');

    const post = this.http.post<any>(this.endpointToken + '/realms/' + this.realm + '/protocol/openid-connect/token', body.toString(), { headers });
    const tokens = await firstValueFrom(post);

    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + tokens.expires_in);
    this.saveTokens(tokens.access_token, tokens.refresh_token, expirationDate);

    return tokens;
  }

  saveTokens(accessToken: string, refreshToken: string, expirationDate: Date) {
    const tokenObject = {
      accessToken,
      refreshToken,
      expiresAt: expirationDate.getTime()
    };

    localStorage.setItem('refreshToken', tokenObject.refreshToken);
    localStorage.setItem('accessToken', tokenObject.accessToken);
    localStorage.setItem('token', JSON.stringify(tokenObject));
  }

  refreshToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('refresh_token', this.tokenService.getRefreshToken())
      .set('grant_type', 'refresh_token')
      .set('client_id', 'heimdall-app');

    return this.http.post<any>(this.endpointToken + '/realms/' + this.realm + '/protocol/openid-connect/token', body.toString(), { headers });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.clear();
    this.navigator("/login");
  }

  sessionLogout() {
    this.alertService.showMessage('info', 'Aviso', 'Sua sessão expirou, faça o login novamente.');
    localStorage.clear();
    this.navigator("/login");
  }

  navigator(rota: string): void {
    this.router.navigate([rota]);
  }
}
