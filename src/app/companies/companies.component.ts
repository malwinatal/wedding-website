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
      "name": "Malwida",
      "image": "../../assets/images/beach_square.jpg",
      "web": "https://www.magicflashphoto.com"
    },
    {
      "name": "Magic Flash Photo",
      "image": "../../assets/images/magicflash.png",
      "web": "https://www.magicflashphoto.com"
    },
    {
      "name": "Oczyszczalnia Miejsce",
      "image": "../../assets/images/oczyszczalnia.png",
      "web": "https://oczyszczalniamiejsce.pl"
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
