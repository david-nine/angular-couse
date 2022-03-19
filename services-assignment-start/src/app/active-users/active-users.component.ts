import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Input() title: string;
  @Input() buttomMessage: string;

  @Output() statusChange = new EventEmitter<number>();

  onStatusChange(id: number) {
    this.statusChange.emit(id);
  }
}
