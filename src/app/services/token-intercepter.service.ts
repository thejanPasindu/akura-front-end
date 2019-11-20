import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserRegistrationService } from './user-registration.service';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements  HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req, next) {
    let authservice = this.injector.get(UserRegistrationService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
