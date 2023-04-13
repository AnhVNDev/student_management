import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(public login: LoginComponent, public router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //login xet duyet de tra ve true or false o day
      if (this.login.logined() ==false) {
        this.router.navigate(['/login']);
        return false;

      }
      else return true;

    // return true;
  }
  
}
