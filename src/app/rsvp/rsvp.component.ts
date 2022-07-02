import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Diets } from '../models/Diets';
import { Rsvp } from '../models/Rsvp';
import { AccountService } from '../services/account.service';
import { RsvpService } from '../services/rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit, AfterViewInit {

  Diets = Diets;
  guestForms: any;
  instances: M.Chips[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private rsvpService: RsvpService,
    private accontService: AccountService
  ) {  
  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.chips');
    this.instances = M.Chips.init(elems, { 
      "placeholder": "Add tag",
      "secondaryPlaceholder": "+tag", 
      "onChipAdd": () => this.updateChips(), 
      "onChipDelete": () => this.updateChips() 
    });
  }

  ngOnInit(): void {
    this.rsvpService.getRsvpsForAccount(this.accontService.accountId).subscribe(guests => {
      this.guestForms = this.formBuilder.array(guests.map(guest => this.adaptGuestToFormGroup(guest)));
    });

    this.guestForms.valueChanges.subscribe(((form: FormGroup) => console.log(form)));
  }

  adaptGuestToFormGroup(guest: Rsvp): FormGroup {
    return this.formBuilder.group({
      id: [guest.id],
      name: [guest.name],
      surname: [guest.surname],
      going: [guest.going],
      diet: [guest.diet],
      allergies: [guest.allergies]
    });
  }

  updateChips(): void {
    this.guestForms.controls.forEach((form: FormGroup, i: number) => {
      const allergies = this.instances[i].chipsData.map(chip => chip.tag);
      form.patchValue({allergies: allergies});
    });
  }

}
