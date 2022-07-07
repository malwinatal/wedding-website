import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const allLangs = ['gb', 'pl', 'pt'];

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent implements OnInit {
  otherLangs: string[] = [];
  selectedLang: string = 'gb';
  isVisible = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.selectedLang = this.translate.currentLang;
    this.selectedFlag();
  }

  togglePicker(): void {
    this.isVisible = !this.isVisible;
  }

  changeLanguage(lang: string): void {
    this.togglePicker();
    this.translate.use(lang == 'gb' ? 'en' : lang);
    this.selectedLang = lang;
    this.selectedFlag();
  }

  selectedFlag() {
    if (this.selectedLang != 'pt' && this.selectedLang != 'pl') {
      this.selectedLang = 'gb';
    }

    this.otherLangs = allLangs.filter((l) => l != this.selectedLang);
  }
}
