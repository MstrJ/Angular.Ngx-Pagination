import { User, listOfUsers } from './../user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = listOfUsers;

  page: number = 1;

  onChangePage(event: any) {
    this.page = event;
  }
}
