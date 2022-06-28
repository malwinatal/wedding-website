import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit, AfterViewInit {

  public guests = [{"name": "Davidek"}, {"name": "Davidinho"}, {"name": "Davdav"}];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems);
  }

  ngOnInit(): void {}
}
