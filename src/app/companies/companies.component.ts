import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, AfterViewInit {

  public companyItems = [
    {
      "name": "malvida",
      "image": "../../assets/images/logos/malvida.png",
      "web": "https://malvida.eu"
    },
    {
      "name": "Magic Flash Photo",
      "image": "../../assets/images/logos/magicflash.jpeg",
      "web": "https://www.magicflashphoto.com"
    },
    {
      "name": "Oczyszczalnia Miejsce",
      "image": "../../assets/images/logos/oczyszczalnia.png",
      "web": "https://oczyszczalniamiejsce.pl"
    },
    {
      "name": "Aneta Siemieniuk Fotografia",
      "image": "../../assets/images/logos/anetafotografia.jpeg",
      "web": "https://www.facebook.com/aneta.siemieniuk.fotografia"
    },
    {
      "name": "Platinium Visage",
      "image": "../../assets/images/logos/platiniumvisage.png",
      "web": "https://platiniumvisage.pl"
    },
    {
      "name": "DJ nova-Q",
      "image": "../../assets/images/logos/novaq.jpeg",
      "web": "http://www.nova-q.pl"
    }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
  }

}
