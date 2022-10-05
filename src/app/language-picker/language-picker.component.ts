import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const allLangs = ['gb', 'pl', 'pt'];

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent implements OnInit {
  @Input() selectedLang!: string;
  @Input() direction: string = 'down';
  @Output() changeLang = new EventEmitter<string>();

  selectedFlag!: string;
  otherLangs: string[] = [];
  isVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.setFlags();
  }

  togglePicker(): void {
    this.isVisible = !this.isVisible;
  }

  changeLanguage(lang: string): void {
    this.togglePicker();
    this.selectedLang = lang;
    this.setFlags();
    this.changeLang.emit(lang == 'gb' ? 'en' : lang);
  }

  setFlags() {
    this.selectedFlag =
      this.selectedLang != 'pt' && this.selectedLang != 'pl'
        ? 'gb'
        : this.selectedLang;

    this.otherLangs = allLangs.filter((l) => l != this.selectedFlag);
  }
}
