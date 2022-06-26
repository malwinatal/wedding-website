import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  public guest: string = "human human";
  public companions: string = "with your cats";
  constructor() { }

  ngOnInit(): void {
  }

}
