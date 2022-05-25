import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isAuthenticated()) {
      if (this.isTokenExpired()) {
        this.auth.logout();
        this.auth.signOut();
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    this.auth.signOut();
    console.log('Logout');
    this.router.navigate(['/login']);
    return false;
  }

  isTokenExpired(): boolean {
    let token = this.auth.token;
    let payload = this.auth.getPayload(token);
    let now = new Date().getTime() / 1000;
    if (payload.exp < now) {
      return true;
    }
    return false;
  }
}
