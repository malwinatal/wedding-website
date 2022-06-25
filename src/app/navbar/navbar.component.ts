import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Sidenav } from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private sidenav: Sidenav | undefined;

  constructor (@Inject(DOCUMENT) private document: Document) {
    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.sidenav');
      this.sidenav = Sidenav.init(elems)[0];
    });
  }

  ngOnInit(): void {
  }

  clickedSidenav() {
    (this.sidenav as Sidenav).close();
  }

}
