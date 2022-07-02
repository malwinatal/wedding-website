import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  api = 'https://formsubmit.co/ajax/0c1c95ac0e81723e8c89e00ebeb89d78';
  constructor(private http: HttpClient) {}

  postMessage(input: any): Observable<any> {
    return this.http
      .post(this.api, input, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .pipe(catchError((err) => throwError(() => 'failed')));
  }
}
