import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  public guests = [{"name": "Davidek"}, {"name": "David de Oliveira Pinto Gago"}, {"name": "Guest Guest Guest Guest"}];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.chips');
    M.Chips.init(elems, {"placeholder": "Add tag", "secondaryPlaceholder": "+tag"});
  }

}
