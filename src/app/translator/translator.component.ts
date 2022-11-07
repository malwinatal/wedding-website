import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LittleTranslator } from '../models/LittleTranslator';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements OnInit {
  public sentences: Array<LittleTranslator> = [
    {
      en: 'Good morning',
      pl: 'Dzień dobry',
      pt: 'Bom dia',
    },
    {
      en: 'Good afternoon',
      pl: 'Dzień dobry',
      pt: 'Boa tarde',
    },
    {
      en: 'Good evening',
      pl: 'Dobry wieczór',
      pt: 'Boa noite',
    },
    {
      en: 'Hi',
      pl: 'Cześć',
      pt: 'Olá',
    },
    {
      en: 'Thank you',
      pl: 'Dziękuję',
      pt: 'Obrigado',
    },
    {
      en: "I'm sorry",
      pl: 'Przepraszam',
      pt: 'Desculpe',
    },
    {
      en: 'Excuse me',
      pl: 'Przepraszam',
      pt: 'Com licenca',
    },
    {
      en: 'Nice to meet you',
      pl: 'Miło poznać',
      pt: 'Prazer em conhecê-lo/la',
    },
    {
      en: 'Very tasty',
      pl: 'Bardzo smaczne',
      pt: 'Muito delicioso',
    },
    {
      en: 'Cheers!',
      pl: 'Na zdrowie!',
      pt: 'Saúde!',
    },
    {
      en: 'Congratulations',
      pl: 'Gratulacje',
      pt: 'Parabéns',
    },
    {
      en: 'Yes',
      pl: 'Tak',
      pt: 'Sim',
    },
    {
      en: 'No',
      pl: 'Nie',
      pt: 'Não',
    },
    {
      en: 'No, thank you',
      pl: 'Nie, dziękuję',
      pt: 'Nao, obrigado',
    },
    {
      en: 'Where is a bathroom?',
      pl: 'Gdzie jest łazienka?',
      pt: 'Onde é a casa de banho?',
    },
    {
      en: 'Can I have a cup of wine please?',
      pl: 'Poproszę lampkę wina',
      pt: 'Queria um copo de vinho por favor',
    },
    {
      en: 'Can I have one beer please?',
      pl: 'Poproszę jedno piwo',
      pt: 'Uma cerveja por favor',
    },
    {
      en: 'Vodka',
      pl: 'Wódka',
      pt: 'Vodka',
    },
    {
      en: 'The best football player is...',
      pl: 'Najlepszym piłkarzem jest Robert Lewandowski',
      pt: 'O melhor jogador de futebol é o Cristiano Ronaldo',
    },
  ];

  langLeft: string;
  langRight: string;

  constructor(private translate: TranslateService) {
    this.langLeft = this.translate.currentLang;
    this.langRight = this.translate.currentLang === 'pl' ? 'pt' : 'pl';
  }

  ngOnInit(): void {}

  changeLangLeft(lang: string): void {
    this.langLeft = lang;
  }

  changeLangRight(lang: string): void {
    this.langRight = lang;
  }
}
