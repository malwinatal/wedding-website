import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit, AfterViewInit {

  public guests = [{"id": 1, "name": "Davidek"}, {"id": 2, "name": "David de Oliveira Pinto Gago"}, {"id": 3, "name": "Guest Guest Guest Guest"}];

  guestForms = this.formBuilder.array(this.createFormGroups());
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder
  ) {  
  }

  instances: M.Chips[] = [];

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.chips');
    this.instances = M.Chips.init(elems, {"placeholder": "Add tag", "secondaryPlaceholder": "+tag", "onChipAdd": (e, chip) => this.updateChips(), "onChipDelete": (e, chip) => this.updateChips()});
  }

  ngOnInit(): void {
    this.guestForms.valueChanges.subscribe((form => console.log(form)));
  }

  createFormGroups(): Array<FormGroup> {
      return this.guests.map(guest => this.createFormGroup(guest));
  }

  createFormGroup(guest: any): FormGroup {
    return this.formBuilder.group({
      id: [guest.id],
      name: [guest.name],
      going: [],
      diet: [""],
      allergies: this.formBuilder.group({tag: []})
    });

  }

  updateChips(): void {
    this.instances.map(i => console.log(i.chipsData));
    //this.guestForm.patchValue({allergies: arr});
  }

}
