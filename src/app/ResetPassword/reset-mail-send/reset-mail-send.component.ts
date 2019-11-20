import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ResetPasswordService } from '../../services/reset-password.service';
import { ResetPass } from '../../model/reset-pass';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-mail-send',
  templateUrl: './reset-mail-send.component.html',
  styleUrls: ['./reset-mail-send.component.css']
})
export class ResetMailSendComponent implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  show = true;
  msgVisibility = false;
  allert = '';

  constructor(private _resetPasswordService: ResetPasswordService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onResetPasswoord() {
    let resetPassModule = new ResetPass(this.email.value);
    //console.log(this.email.value);
    this._resetPasswordService.onReset(resetPassModule).subscribe(
      message => {
        if ('We have e-mailed your password reset link!' == message.message) {
          this.allert = message.message;
          this.msgVisibility = true;
          this.show = false;
        }
        console.log(message);
      },

      error => {
        if (error.status == 404) {
          //console.log(error.error.message)
          this.openSnackBar(error.error.message, 'cancel')
          this.email.setValue('');
          //console.log('erro')
        }
      }
    );
  }

}
