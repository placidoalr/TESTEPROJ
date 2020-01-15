import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    if (this.authService.usuarioEstaAutenticado()) {
      return observableOf(true);
    } else {
      this.router.navigate(['/Login']);

      return observableOf(false);
    }

  }
}
