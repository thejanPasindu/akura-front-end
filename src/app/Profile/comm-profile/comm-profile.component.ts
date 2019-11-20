import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileManagementService } from 'src/app/services/profile-management.service';
import { User } from 'src/app/model/user';

export interface dialogData {
  id: number;
}

@Component({
  selector: 'app-comm-profile',
  templateUrl: './comm-profile.component.html',
  styleUrls: ['./comm-profile.component.css']
})
export class CommProfileComponent implements OnInit {

  user = new User('','','','','','','','','','','','','','','','','','','','','','',);
  url: any;

  constructor(
    public dialogRef: MatDialogRef<CommProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData,
    private _profile:ProfileManagementService,
  ) { }

  ngOnInit() {
    this._profile.CommonUserProfileDetailse(this.data).subscribe(
      ress=>{
        this.user = ress[0];
        this.user.sname = ress[0].name;
        console.log(this.user);
      }
    );

    this._profile.getUserAvatar(this.data).subscribe(
      ress=>{
        if(ress.length!=0){
          //console.log(ress);
          this.url = ress[0].avatar;
        }
        
      }
    );
  }

}
