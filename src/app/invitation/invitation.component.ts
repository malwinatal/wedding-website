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
  public who: string = 'you';

  constructor(
    accountService: AccountService,
    private translate: TranslateService
  ) {
    this.userAccount = accountService.account;
  }

  ngOnInit(): void {
    this.guest = this.userAccount!.invitationName;

    this.translate.onLangChange.subscribe(() => {
      switch (this.userAccount?.companions) {
        case Companions.SINGLE:
          this.who = this.translate.instant('INVITATION.INVITE.WHO.SINGLE');
          break;
        case Companions.PLUSONE:
          this.who = this.translate.instant('INVITATION.INVITE.WHO.PLURAL');
          break;
        case Companions.WITHCHILDREN:
          this.who = this.translate.instant(
            'INVITATION.INVITE.WHO.WITH_CHILDREN'
          );
          break;
        default:
          break;
      }
    });
  }
}
