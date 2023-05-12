import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserData } from 'src/app/services/user/type';
import { UserService } from 'src/app/services/user/user.service';
import { CellClickEvent, RowPreparedEvent, SavedEvent, SavingEvent } from 'devextreme/ui/data_grid';
@Component({
  selector: 'app-devexpress',
  templateUrl: './devexpress.component.html',
  styleUrls: ['./devexpress.component.scss']
})
export class DevexpressComponent {
  users: UserData = [];
  userSubscription!: Subscription;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(): void {
    this.userSubscription = this.userService.getUsers().subscribe((users: UserData) => {
      this.users = users
    });
  }
  
  getDataAndLog(data: CellClickEvent): void {
    console.log(data.value)
  }

  onRowPrepared(e: RowPreparedEvent) {
    if (e.rowType === 'data' && e.data.id % 2 === 0) {
        e.rowElement.style.background = '#f0f0f0'
    }
  }

  onSaved(e: SavedEvent){
    console.log("onSaved")
    console.log(e)
  }
  
  onSaving(e: SavingEvent){
    console.log("onSaving")
    console.log(e)
  }
}