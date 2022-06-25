import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FloatingActionButton, FloatingActionButtonOptions } from "materialize-css";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private translate: TranslateService, private cookieService: CookieService) {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var options: FloatingActionButtonOptions = {
        direction: 'left',
        hoverEnabled: false,
        toolbarEnabled: false
      }
      var instances = FloatingActionButton.init(elems, options);
    });
  }

  ngOnInit(): void {}

  setLanguage(language: string): void {
    this.translate.use(language);
    this.cookieService.set('lang', language);
  }

}
