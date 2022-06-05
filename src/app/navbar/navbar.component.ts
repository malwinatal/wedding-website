import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Sidenav } from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor (@Inject(DOCUMENT) private document: Document) {
    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.sidenav');
      Sidenav.init(elems);
    });
  }

  ngOnInit(): void {
  }

}
