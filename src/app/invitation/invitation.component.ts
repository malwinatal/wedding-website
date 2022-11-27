import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Account } from '../models/Account';
import { Companions } from '../models/Companions';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss'],
})
export class InvitationComponent implements OnInit {
  userAccount: Account | null;
  public guest: string = 'human';

  constructor(
    accountService: AccountService,
    private translate: TranslateService
  ) {
    this.userAccount = accountService.account;
  }

  ngOnInit(): void {
    this.setInvitationName(this.translate.currentLang);

    this.translate.onLangChange.subscribe((event) => {
      this.setInvitationName(event.lang);
    });
  }

  private setInvitationName(currentLang: string) {
    switch (currentLang) {
      case 'pl':
        this.guest = this.userAccount!.invitationNamePl;
        break;
      case 'pt':
        this.guest = this.userAccount!.invitationNamePt;
        break;
      default:
        this.guest = this.userAccount!.invitationNameEn;
        break;
    }
  }
}
