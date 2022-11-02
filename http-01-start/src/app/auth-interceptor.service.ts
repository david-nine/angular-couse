import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

const FIREBASE_URL = 'https://ng-complete-guide-21e42-default-rtdb.firebaseio.com/posts.json';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const clonedReq = req.clone({
            url: FIREBASE_URL + req.url,
            headers: req.headers.append('Auth', 'x y z')
        });
        return next.handle(clonedReq);
    }
}