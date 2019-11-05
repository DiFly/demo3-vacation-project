import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('auth_token')) {
      const modifiedReq = req.clone({
        headers: req.headers.append(
          'Authorization',
          `Bearer ${ sessionStorage.getItem('auth_token') }`)});

      return next.handle(modifiedReq);
    }

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      if (error && error.status === 401) {
        this.router.navigate(['auth']);
      }

      return throwError(error);
    }));

  }
}
