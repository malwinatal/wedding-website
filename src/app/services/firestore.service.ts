import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Account } from '../models/Account';
import { PersonalInfo } from '../models/PersonalInfo';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private store: AngularFirestore) {}

  getUserAccount(code: String): Observable<Account> {
    return this.store
      .collection<Account>('logins', (ref) =>
        ref.where('code', '==', code).limit(1)
      )
      .valueChanges()
      .pipe(map((accounts) => accounts[0]));
  }

  getSensitiveInformation(): Observable<PersonalInfo | undefined> {
    return this.store
      .doc<PersonalInfo>('personalInfo/gI89B6SX7PEJrcRnkQ5M')
      .valueChanges();
  }
}
