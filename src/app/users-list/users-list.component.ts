import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  usersList = [];

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  search(query: string) {
    this.usersList = this.userService.findUser(query);
  }

  sort(direction: string) {
    this.usersList = this.userService.sortUser(direction);
  }
}
