import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Malwina & David';

  constructor(translate: TranslateService, private cookieService: CookieService) {
    if (cookieService.check('lang')) {
      const lang = cookieService.get('lang')
      translate.use(lang);
    } else {
      const lang = navigator.language || window.navigator.language;
      if (lang.includes('pt')) {
        translate.use('pt');
      }
      if (lang.includes('pl')) {
        translate.use('pl');
      }
    }
  }

}
