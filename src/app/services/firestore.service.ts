import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first, map, Observable } from 'rxjs';
import { Account } from '../models/Account';
import { PersonalInfo } from '../models/PersonalInfo';
import { Rsvp } from '../models/Rsvp';

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
      .pipe(
        first(),
        map((accounts) => accounts[0])
      );
  }

  getSensitiveInformation(): Observable<PersonalInfo | undefined> {
    return this.store
      .doc<PersonalInfo>('personalInfo/gI89B6SX7PEJrcRnkQ5M')
      .valueChanges()
      .pipe(first());
  }

  getRsvpsForAccount(accountId: string): Observable<Array<Rsvp>> {
    return this.store
      .collection<Rsvp>('rsvps', (ref) =>
        ref.where('accountId', '==', accountId)
      )
      .valueChanges({ idField: 'id' })
      .pipe(first());
  }

  saveRsvp(rsvp: Rsvp): void {
    this.store.doc(`rsvps/${rsvp.id}`).update(rsvp);
  }
}
