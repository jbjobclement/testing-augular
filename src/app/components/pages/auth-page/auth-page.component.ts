import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  authorized: boolean = false;
  constructor(private authService: AuthService) {
    this.authorized = this.authService.authorized;
  }

  logIn(): void {
    this.authService.authorize()
    this.authorized = true;
  }
  
  logOut(): void {
    this.authService.unAuthorize()
    this.authorized = false;
  }
}
