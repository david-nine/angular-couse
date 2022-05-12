import { Observable } from "rxjs";

export interface CanComponentDeativate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeativate> {

    canDeactivate(component: CanComponentDeativate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return component.canDeactivate();

    }

}