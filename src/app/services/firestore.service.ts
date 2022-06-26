import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private store: AngularFirestore) {}

  getUserAccount(code: String): Observable<Account> {
    return this.store
      .collection<Account>('logins', (ref) => ref.where('code', '==', code))
      .valueChanges()
      .pipe(map((accounts) => accounts[0]));
  }
}
