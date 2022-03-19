import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private activeUsers = ['Max', 'Anna'];
    private inactiveUsers = ['Chris', 'Manu'];

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

    public getActiveUsers(): string[] {
        return this.activeUsers;
    }

    public getInactiveUsers(): string[] {
        return this.inactiveUsers;
    }

}