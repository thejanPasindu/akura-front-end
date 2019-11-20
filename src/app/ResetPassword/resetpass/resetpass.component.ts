import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ResetPasswordService } from '../../services/reset-password.service';
import { ResetPass } from '../../model/reset-pass';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _resetPasswordService:ResetPasswordService,
    private _snackBar: MatSnackBar,
    private _router:Router
    ) { }

  //toke ='';
  show = true;
  msgShow = false;
  hide = true; //for password eye icon
  hide2 = true; //for conferm_password eye icon

  msg = '';
  userModule = new ResetPass('');

  ngOnInit() {
    let token = this._route.snapshot.paramMap.get('token');
    //this.toke = token;
    this._resetPasswordService.onFind(token).subscribe(
      message => {
        this.userModule.email = message.email;
        this.userModule.token = token;   
        
      },
      error =>{
        //console.log(error.error.message)
        if(error.error.message == 'This password reset token is invalid.'){
          this.show = false;
          this.msg = error.error.message;
          this.msgShow = true;
          this.openSnackBar(error.error.message, 'cancel');
        }
      }
    );
  }

  onResetPasswoord(){
    this._resetPasswordService.onPasswordReset(this.userModule).subscribe(
      message => {
        console.log(message.active)
        if(message.active==1){
          this.openSnackBar('Password Reset..!', 'cancel');
          this._router.navigate(['']);
        }
      },

      error => {
        if(error.status==404){
          this.openSnackBar('Somthing Wrong..!', 'cancel');
          this.userModule.token='';
          this.userModule.password='';
          this.userModule.password_confirmation='';
        }
      }
      
    );
   // console.log(this.userModule);
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
