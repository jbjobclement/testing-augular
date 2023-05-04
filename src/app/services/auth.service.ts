import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authorized: boolean = false
  constructor() {
    const authorizedToken = localStorage.getItem("first-auth-guard");
    const authorized = authorizedToken ? JSON.parse(authorizedToken): false;
    this.authorized = authorized;
  }

  authorize(): void {
    this.authorized = true
    localStorage.setItem("first-auth-guard", "true") 
  }
  
  unAuthorize(): void {
    this.authorized = false
    localStorage.setItem("first-auth-guard", "false") 
  }
}