import { Component } from '@angular/core';
import { Router, NavigationStart, ResolveStart, ResolveEnd, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'newHeimdall';
isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart || event instanceof ResolveStart || event instanceof ResolveEnd || event instanceof NavigationEnd)
      )
      .subscribe(event => {
        if (event instanceof NavigationStart || event instanceof ResolveStart) {
          this.isLoading = true;
        } else {
          this.isLoading = false;
        }
      });

  }


  async ngOnInit() {
    try {
      console.log('ngOnInt appcomponent');
      const authenticated = await this.authService.init();
      if (authenticated) {
        console.log('Usuário autenticado!');
        // Aqui você pode, por exemplo, carregar dados, liberar rotas, etc.
        const userProfile = await this.authService.getkeycloak().loadUserProfile();
        console.log(userProfile); // nome, email, etc.
        console.log(this.authService.getkeycloak().tokenParsed);

      } else {
        console.warn('Usuário não autenticado');
      }
    } catch (error) {
      console.error('Erro na inicialização do Keycloak', error);
    }
  }
}
