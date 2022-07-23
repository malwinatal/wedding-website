import { Component, OnInit } from '@angular/core';
import { LittleTranslator } from '../models/LittleTranslator';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent implements OnInit {
  
  public sentences: Array<LittleTranslator> = [
    {
      "gb": "Good morning",
      "pl": "Dzień dobry",
      "pt": "Bom dia"
    },
    {
      "gb": "Good afternoon",
      "pl": "Dzień dobry",
      "pt": "Boa tarde"
    },
    {
      "gb": "Good evening",
      "pl": "Dobry wieczór",
      "pt": "Boa noite"
    },
    {
      "gb": "Hi",
      "pl": "Cześć",
      "pt": "Ola"   
    },
    {
      "gb": "Thank you",
      "pl": "Dziękuję",
      "pt": "Obrigado" 
    },
    {
      "gb": "I'm sorry",
      "pl": "Przepraszam",
      "pt": "Desculpe" 
    },
    {
      "gb": "Exuse me",
      "pl": "Przepraszam",
      "pt": "Com licenca" 
    },
    {
      "gb": "Nice to meet you",
      "pl": "Miło poznać",
      "pt": "Prazer de conhecer"
    },
    {
      "gb": "Cheers!",
      "pl": "Na zdrowie!",
      "pt": "Saude!"
    },
    {
      "gb": "Congratulations",
      "pl": "Gratulacje",
      "pt": "Parabens"
    },
    {
      "gb": "Yes",
      "pl": "Tak",
      "pt": "Sim"
    },
    {
      "gb": "No",
      "pl": "Nie",
      "pt": "Nao"
    },
    {
      "gb": "No, thank you",
      "pl": "Nie, dziękuję",
      "pt": "Nao, obrigada"  
    },
    {
      "gb": "Where is a bathroom?",
      "pl": "Gdzie jest łazienka?",
      "pt": "Onde e casa de banho?"
    },
    {
      "gb": "Can I have a cup of wine please?",
      "pl": "Poproszę lampkę wina",
      "pt": "Queria um copo de vinho por favour"
    },
    { 
      "gb": "Can I have one beer please?",
      "pl": "Poproszę jedno piwo",
      "pt": "Uma cerveja por favour" 
    },
    {
      "gb": "Vodka",
      "pl": "Wódka",
      "pt": "Vodka"
    }
    
  ];

  langLeft: string = 'pl';
  langRight: string = 'pt';

  constructor() { }

  ngOnInit(): void {
  }

  changeLangLeft(lang: string): void {
    this.langLeft = lang;    
  }

  changeLangRight(lang: string): void {
    this.langRight = lang;
  }

}
