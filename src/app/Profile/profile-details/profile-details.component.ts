import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from '../../services/profile-management.service';
import { User } from '../../model/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  user = new User('','','','','','','','','','','','','','','','','','','','','','',);
  paymentType = ['money','inventory'];
  constructor(
   private _profile:ProfileManagementService,
   private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this._profile.GetProfile().subscribe(
      ress => {
       // console.log(ress);
        this.user = ress[0];
        this.user.sname = ress[0].name;
        //console.log(this.user);
      }
    );
  }

  onUpdate(){
    this._profile.updateProfile(this.user).subscribe(
      ress =>{
        if('Successfully updated!'== ress.message){
          this.openSnackBar(ress.message,'cancel');
      }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }

}
