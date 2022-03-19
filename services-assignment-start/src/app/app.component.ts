import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.getActiveUsers();
    this.inactiveUsers = this.userService.getInactiveUsers();
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
