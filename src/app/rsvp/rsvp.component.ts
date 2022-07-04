import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Diets } from '../models/Diets';
import { Rsvp } from '../models/Rsvp';
import { AccountService } from '../services/account.service';
import { RsvpService } from '../services/rsvp.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit, AfterViewChecked {

  Diets = Diets;
  guestForms: any;
  instances: M.Chips[] = [];

  private chipsInitialized = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private rsvpService: RsvpService,
    private accontService: AccountService
  ) {  
  }

  ngAfterViewChecked(): void {
    if (this.guestForms && !this.chipsInitialized) {
      this.initializeChips();
      this.chipsInitialized = true;
    }
  }

  ngOnInit(): void {
    this.rsvpService.getRsvpsForAccount(this.accontService.accountId).subscribe(guests => {
      this.guestForms = this.formBuilder.array(guests.map(guest => this.adaptGuestToFormGroup(guest)));

      this.guestForms.controls.forEach((form: FormGroup)  => form.valueChanges.subscribe((form: Rsvp) => console.log(form)))
    });
  }

  initializeChips(): void {
    var elems = document.querySelectorAll('.chips');
    this.instances = M.Chips.init(elems, { 
      "placeholder": "Add tag",
      "secondaryPlaceholder": "+tag", 
      "onChipAdd": () => this.updateChips(), 
      "onChipDelete": () => this.updateChips() 
    });
    this.setInitialChips();
  }

  adaptGuestToFormGroup(guest: Rsvp): FormGroup {
    return this.formBuilder.group({
      accountId: [guest.accountId],
      id: [guest.id],
      name: [guest.name],
      surname: [guest.surname],
      going: [guest.going],
      diet: [guest.diet],
      allergies: [guest.allergies]
    });
  }

  setInitialChips(): void {
    this.guestForms.value.forEach((rsvp: Rsvp, i: number) => {
      rsvp.allergies.forEach(allergy => this.instances[i].addChip({tag: allergy}));
    });
  }

  updateChips(): void {
    this.guestForms.controls.forEach((form: FormGroup, i: number) => {
      const allergies = this.instances[i].chipsData.map(chip => chip.tag);
      form.patchValue({allergies: allergies});
    });
  }

/*   saveForm(form: Rsvp): void {
    this.rsvpService.saveRsvpForAccount(this.accontService.accountId, form);
  } */

}
