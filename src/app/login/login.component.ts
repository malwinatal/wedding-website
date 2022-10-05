import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { AccountService } from '../services/account.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  invalid = false;
  selectedLang: string;
  constructor(
    private fs: FirestoreService,
    private as: AccountService,
    private cookieService: CookieService,
    private router: Router,
    private translate: TranslateService
  ) {
    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems);
    });
    this.selectedLang = this.translate.currentLang
      ? this.translate.currentLang
      : 'en';
  }

  ngOnInit(): void {}

  login(code: string): void {
    this.fs.getUserAccount(code).subscribe((result) => {
      if (result == null) {
        this.invalid = true;
      } else {
        this.invalid = false;
        this.as.account = result;
        this.cookieService.set('code', code);
        this.router.navigate(['home']);
      }
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
    this.selectedLang = lang;
  }
}
