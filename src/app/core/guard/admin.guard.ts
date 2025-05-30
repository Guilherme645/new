import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../../features/auth/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roles = this.tokenService.getRoles();

    if (!roles.includes('admin')) {
      this.router.navigate(['/acessoNegado']);
      return false;
    }

    return true;
  }
}
