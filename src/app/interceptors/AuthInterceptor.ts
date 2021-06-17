import { StorageService } from './../services/storage.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private StorageService: StorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const currentUser = this.StorageService.hasToken();
    if (currentUser === true) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.StorageService.getToken()}`

        }
      });
    }

    return next.handle(request);
  }

}
