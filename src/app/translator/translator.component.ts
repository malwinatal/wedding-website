import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent implements OnInit {
  
  public sentences = [
    {
      "name": "goodMorning",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"
    },
    {
      "name": "goodAfternoon",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"
    },
    {
      "name": "goodEvening",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"
    },
    {
      "name": "hi",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "thankYou",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "imSorry",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "execuseMe",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "niceToMeetYou",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "cheers",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "congratulations",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "yes",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "no",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "noThankYou",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "bathroom",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "wine",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "beer",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"    
    },
    {
      "name": "vodka",
      "translationEn": "Good morning",
      "translationPl": "Dzień dobry",
      "translationPt": "Bom dia"
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
