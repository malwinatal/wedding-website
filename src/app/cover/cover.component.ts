import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  dateAvailable =  false;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.dateAvailable = this.accountService.account!.name === 'guest' ? false : true;
  }

}
