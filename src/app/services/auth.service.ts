import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authorized: boolean = false
  authorizationSubject: Subject<boolean> = new Subject<boolean>()
  authorization$ = this.authorizationSubject.asObservable();

  constructor() {
    const authorizedToken = localStorage.getItem("first-auth-guard");
    const authorized = authorizedToken ? JSON.parse(authorizedToken): false;
    this.authorized = authorized;
    this.authorization$.subscribe((authorized) => {
      this.authorized = authorized;
    })
  }

  authorize(): void {
    this.authorizationSubject.next(true)
    localStorage.setItem("first-auth-guard", "true")
  }
  
  unAuthorize(): void {
    this.authorizationSubject.next(false)
    localStorage.setItem("first-auth-guard", "false") 
  }
}