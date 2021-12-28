import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showAlert!: boolean

  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) { }

  ngOnInit(): void {
    this.showAlert = this.socialAuthServive.authState ? true : false;
    this.showAlert ? setTimeout(() => { this.showAlert = false }, 1000) : this.showAlert = true;
  }

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }

  onClose() {
    this.showAlert = false
  }

}
