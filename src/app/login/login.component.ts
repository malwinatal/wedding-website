import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  invalid = false;
  errorText = '';
  constructor(
    private store: AngularFirestore,
    private cookieService: CookieService,
    private router: Router,
    private translate: TranslateService
  ) {
    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems);
    });
  }

  ngOnInit(): void {
    /*if (this.cookieService.check('code')) {
      const code = this.cookieService.get('code');
      this.login(code);
    }*/
    this.getWrongTextTranslation();
    this.translate.onLangChange.subscribe((event) => {
      this.translate.use(event.lang);
      this.getWrongTextTranslation();
    });
  }

  login(code: string): void {
    this.store
      .collection('logins', (ref) => ref.where('code', '==', code))
      .get()
      .subscribe((result) => {
        if (result.empty) {
          //FAIL
          this.invalid = true;
        } else {
          //SUCCESS
          this.invalid = false;
          const person = result.docs[0];
          this.cookieService.set('code', code);
          this.router.navigate(['home']);
        }
      });
  }

  getWrongTextTranslation() {
    this.translate
      .get('LOGIN.ERROR')
      .pipe(first())
      .subscribe((text) => (this.errorText = text));
  }
}
