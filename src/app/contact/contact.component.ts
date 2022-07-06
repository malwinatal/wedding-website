import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { PersonalInfo } from '../models/PersonalInfo';
import { AccountService } from '../services/account.service';
import { EmailService } from '../services/email.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailForm = this.fb.group({
    name: [''],
    _replyto: ['', [Validators.email, Validators.required]],
    _subject: ['', Validators.required],
    message: ['', Validators.required],
    _honey: [''],
    _captcha: [''],
  });
  info!: PersonalInfo;

  constructor(
    private as: AccountService,
    private fb: FormBuilder,
    private fs: FirestoreService,
    private es: EmailService
  ) {}

  ngOnInit(): void {
    this.emailForm.get('name')?.setValue(this.as.account!.invitationName);
    this.emailForm.get('name')?.disable();
    this.fs
      .getSensitiveInformation()
      .pipe(first())
      .subscribe((info) => {
        if (info != undefined) {
          this.info = info;
        }
      });
  }

  sendEmail(input: any): void {
    if (this.emailForm.valid) {
      this.es.postMessage(input).subscribe({
        next: (result) => {
          M.toast({ html: 'Thank you for your feedback!', classes: 'rounded' });
        },
        error: (error) => {
          M.toast({
            html: 'There was a problem sending the email, please contact us through other means.',
            classes: 'rounded red',
          });
        },
      });
    }
  }
}
