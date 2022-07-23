import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const allLangs = ['gb', 'pl', 'pt'];

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent implements OnInit {
  @Input() selectedLang!: string;
  @Output() changeLang = new EventEmitter<string>();
  
  otherLangs: string[] = [];
  isVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.selectedFlag();
  }

  togglePicker(): void {
    this.isVisible = !this.isVisible;
  }

  changeLanguage(lang: string): void {
    this.togglePicker();
    this.selectedLang = lang;
    this.selectedFlag();
    this.changeLang.emit(lang);
  }

  selectedFlag() {
    console.log(this.selectedLang)
    if (this.selectedLang != 'pt' && this.selectedLang != 'pl') {
      this.selectedLang = 'gb';
    }

    this.otherLangs = allLangs.filter((l) => l != this.selectedLang);
  }
}
