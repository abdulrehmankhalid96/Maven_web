import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppserviceService } from './appservice.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {
  constructor(public service: AppserviceService, public router: Router) {}
  canActivate(): boolean {
    if (this.service.token_varifying()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}