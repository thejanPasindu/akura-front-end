import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/user-login';
import { LoginService } from '../login.service';
import { Router } from "@angular/router"

import { UserRegistrationService } from '../services/user-registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _log: UserRegistrationService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  loginModel = new UserLogin('', '', false);;
  editable = false;
  msgShow = false;
  loading = false;

  onLogin() {
    // console.log(this.loginModel);
    this.loading = true;//start loading sping bars
    this._log.login(this.loginModel)
      .subscribe(
        access_token => {
          this.router.navigate(['/dash2'])
          localStorage.setItem('token', access_token.access_token)
          
        },
        error => {
          if (error.status == 401) {
            this.openSnackBar(error.error.message, 'cancel');
            this.msgShow = true;
            this.loginModel.email = '';
            this.loginModel.password = '';
            this.loading = false; //stop loading sping bar
          }
        }

        //access_token => console.log(access_token.expires_at)//console.log('Success !',data),
        /*  message => {
           if(message instanceof HttpErrorResponse){
             if(message.status === 401){
               this.router.navigate(['/login'])
             }
           }
           console.log(message)
         } */


      ); //*/

  }

  onOk() {
    this._log.onCheck();
  }

  ngOnInit() {
  }

  onClear() {
    this.msgShow = false;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
