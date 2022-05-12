import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private logedIn: boolean = false;

    public isAuthenticated(): Promise<boolean> {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.logedIn);
                }, 800)       
            }
        ) as Promise<boolean>;
        return promise;
    }

    public login() {
        this.logedIn = true;
    }

    public logout() {
        this.logedIn = false;
    }

}