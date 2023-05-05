import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  authorized: boolean = false;
  authSubscription!: Subscription;
  constructor(private authService: AuthService) {
    this.authorized = this.authService.authorized;
  }

  ngOnInit(): void {
    this.authService.authorization$.subscribe((authorized) => {
      this.authorized = authorized;
    })
  }

  logIn(): void {
    this.authService.authorize()
  }
  
  logOut(): void {
    this.authService.unAuthorize()
  }
}