import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { InvitationComponent } from './invitation/invitation.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { LocationComponent } from './location/location.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PicturesComponent } from './pictures/pictures.component';
import { CountriesComponent } from './countries/countries.component';
import { ContactComponent } from './contact/contact.component';
import { CompaniesComponent } from './companies/companies.component';
import { CookieService } from 'ngx-cookie-service';
import { MapComponent } from './location/map/map.component';
import { EmailService } from './services/email.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FootnoteComponent } from './footnote/footnote.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LanguageSelectorComponent,
    InvitationComponent,
    RsvpComponent,
    LocationComponent,
    ScheduleComponent,
    PicturesComponent,
    CountriesComponent,
    ContactComponent,
    CompaniesComponent,
    MapComponent,
    FootnoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    ReactiveFormsModule,
  ],
  providers: [CookieService, FormBuilder, EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
