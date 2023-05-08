import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserData } from 'src/app/services/user/type';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-angular-http-testing',
  templateUrl: './angular-http-testing.component.html',
  styleUrls: ['./angular-http-testing.component.scss']
})

export class AngularHttpTestingComponent implements OnInit, OnDestroy {
  users: UserData = [];
  userSubscription!: Subscription;
  test: string = "";
  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(): void {
    this.userSubscription = this.userService.getUsers().subscribe((users: UserData) => {
      this.users = users
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}