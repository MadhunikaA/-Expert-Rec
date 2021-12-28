import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }, // only accessible if authorised
  { path: '**', component: LoginComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes)
