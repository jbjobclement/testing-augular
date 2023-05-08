import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  authorized: boolean = false;
  authSubscription!: Subscription;
  defaultDataFromRouteConfig!: string;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.authorized = this.authService.authorized;
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.authorization$.subscribe((authorized) => {
      this.authorized = authorized;
    })
    const defaultData = this.route.snapshot.data["defaultData"]
    this.defaultDataFromRouteConfig = defaultData;
  }
  
  logIn(): void {
    this.authService.authorize()
  }
  
  logOut(): void {
    this.authService.unAuthorize()
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }
}