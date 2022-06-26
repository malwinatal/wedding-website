import { Component, OnInit } from '@angular/core';
import { Account } from '../models/Account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss'],
})
export class InvitationComponent implements OnInit {
  userAccount!: Account;
  public guest: string = 'human';

  constructor(as: AccountService) {
    this.userAccount = as.account;
  }

  ngOnInit(): void {}
}
