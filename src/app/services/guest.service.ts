import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../models/Guest';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private fireStoreService: FirestoreService) { }

  getGuestsForAccount(id: string): Observable<Array<Guest>> {
    return this.fireStoreService.getGuestsForAccount(id);
  }

}
