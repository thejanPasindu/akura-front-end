import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardGuard implements CanActivate {
  
  
  constructor ( private _route:Router){}

  canActivate(): boolean{

    if(localStorage.getItem('akuserroleura')=='student'){
      return false;
    }else{
      this._route.navigate(['']);
      return false;
    } 
    

    return true;
  }
}
