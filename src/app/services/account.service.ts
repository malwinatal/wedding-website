import { Injectable } from '@angular/core';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _loggedIn: boolean = false;
  private _account: Account | null = null;

  constructor() {}

  set account(account: Account | null) {
    this._loggedIn = account != null;
    this._account = account;
  }

  get account(): Account | null {
    return this._account;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get accountId(): string {
    return this.account!.id;
  }
}
