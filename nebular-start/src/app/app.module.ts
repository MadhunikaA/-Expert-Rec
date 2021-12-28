import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//nebular Components
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbInputModule, NbFormFieldModule, NbButtonGroupModule, NbAlertModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

//feature Components
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';

//auth-gurad-services
import { AuthGuardService } from './auth-guard.service';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }, // only accessible if authorised
      { path: '**', component: LoginComponent }
    ]),
    BrowserAnimationsModule,
    SocialLoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonGroupModule,
    NbAlertModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('884713958485-5eh255742r5u6k1ii7qlbsuc6o1q00pj.apps.googleusercontent.com') // your client id
        }
      ]
    }
  },
  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
