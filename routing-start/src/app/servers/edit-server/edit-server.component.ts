import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeativate } from './can-deativate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeativate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  chagesSaved = false;

  constructor(private serversService: ServersService,
    private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server);
    this.chagesSaved = true;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.chagesSaved) {
      return confirm("Do you want discard the chages?");
    } else {
      return true;
    }
  }

}
