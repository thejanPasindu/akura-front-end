import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserRegistrationService } from '../../services/user-registration.service';


@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(
    private _userRegistrationService:UserRegistrationService,
    private _snackBar: MatSnackBar,
    private _activeRoute:ActivatedRoute
  ) { }

  msg = '';
  show = true;

  ngOnInit() {
    let token = this._activeRoute.snapshot.paramMap.get('token');
    console.log(token);

    this._userRegistrationService.onActivate(token).subscribe(
      message => {
        console.log(message.active)
        if(message.active){
          this.msg = 'You account has been activated...!';
          this.openSnackBar(this.msg,'cancel');
        }
      },
      error =>{
        console.log(error.error.message);
        this.msg = error.error.message;
        this.openSnackBar(this.msg,'cancel')
      }

    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
