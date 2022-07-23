import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { FirestoreService } from '../services/firestore.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private fs: FirestoreService,
    private as: AccountService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.login();
  }

  login(): Observable<boolean> | boolean {
    if (this.cookieService.check('code')) {
      const code = this.cookieService.get('code');
      return this.fs.getUserAccount(code).pipe(
        map((result) => {
          if (result != null) {
            this.as.account = result;
            this.router.navigate(['home']);
            return true;
          }
          return true;
        })
      );
    } else return true;
  }
}
