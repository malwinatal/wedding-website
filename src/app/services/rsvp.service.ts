import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rsvp } from '../models/Rsvp';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {

  constructor(private fireStoreService: FirestoreService) { }

  getRsvpsForAccount(accountId: string): Observable<Array<Rsvp>> {
    return this.fireStoreService.getRsvpsForAccount(accountId);
  }

}
