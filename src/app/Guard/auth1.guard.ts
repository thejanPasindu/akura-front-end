import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { UserRegistrationService } from '../services/user-registration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate{
 
  constructor (private _userRegister:UserRegistrationService, private _route:Router){}

  canActivate(): boolean{
    
    this._userRegister.onCheck().subscribe( 
      res=>{ 
        
      },
      error=>{
        if(error.status === 401){
          console.log(error.status)
          this._route.navigate(['/login'])
          return false
        }
      }

    );

    if(this._userRegister.onCheck()){
      return true
    }else{
      this._route.navigate(['/login'])
      return false
    }

    return true;
  }
  
  
}
