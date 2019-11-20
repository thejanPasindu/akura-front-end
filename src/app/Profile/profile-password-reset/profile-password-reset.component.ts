import { Component, OnInit } from '@angular/core';

import { MatDialog, MatTable } from '@angular/material';
import { ProfileManagementService } from '../../services/profile-management.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeactivateDialogBoxComponent } from 'src/app/Setting/deactivate-dialog-box/deactivate-dialog-box.component';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-profile-password-reset',
  templateUrl: './profile-password-reset.component.html',
  styleUrls: ['./profile-password-reset.component.css']
})
export class ProfilePasswordResetComponent implements OnInit {

  constructor(
    private _profile: ProfileManagementService,
    private _setting: SettingService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  passData = {old_password:'', password:'', password_confirmation:''};

  hide = true; //for password eye icon
  hide2 = true; //for conferm_password eye icon
  ngOnInit() {
  }

  onResetPasswoord(){
    this._profile.resetPass(this.passData).subscribe(
      ress=>{
        this.openSnackBar(ress.message,'cancel');
      },
      error=>{
        this.openSnackBar(error.error.message,'cancel');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }

  openDialog(){
    const dialogRef = this.dialog.open(DeactivateDialogBoxComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
    });
  }

}
