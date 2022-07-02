import { DOCUMENT } from '@angular/common';
import { ArrayType, ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit, AfterViewInit {

  public guests = [{"name": "Davidek"}, {"name": "David de Oliveira Pinto Gago"}, {"name": "Guest Guest Guest Guest"}];

  guestForm = this.formBuilder.group({
    id: [-1],
    name: ["lollz"],
    going: [true],
    diet: ["meat"],
    allergies: this.formBuilder.group({tag: ["lolz"]})
  });

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder
  ) {
  }

  instances: M.Chips[] = [];

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.chips');
    this.instances = M.Chips.init(elems, {"placeholder": "Add tag", "secondaryPlaceholder": "+tag", "onChipAdd": (e, chip) => console.log(this.instances[0].chipsData)});
  }

  ngOnInit(): void {
    this.guestForm.valueChanges.subscribe((form => console.log(form)));
  }

  addChip(): void {
    var arr = this.instances[0].chipsData;
    console.log(arr);
    console.log(this.guestForm.value.allergies?.tag);
    //this.guestForm.patchValue({allergies: arr});
  }

}
