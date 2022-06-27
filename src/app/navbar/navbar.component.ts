import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Sidenav } from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private sidenav!: Sidenav;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    var elems = document.querySelectorAll('.sidenav');
    this.sidenav = Sidenav.init(elems)[0];
  }

  clickedSidenav() {
    this.sidenav.close();
  }

  toggleSidenav() {
    if (this.sidenav.isOpen) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }
}
