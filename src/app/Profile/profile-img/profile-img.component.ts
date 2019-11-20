import { Component, OnInit } from '@angular/core';

import { ProfileManagementService } from '../../services/profile-management.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.css']
})
export class ProfileImgComponent implements OnInit {

  constructor(
    private _profile: ProfileManagementService,
    private _snackBar: MatSnackBar,
  ) { }

  url: any;
  ngOnInit() {
    this._profile.getMyAvatar().subscribe(
      ress=>{
        //console.log(ress);
        if(ress.length != 0){
          this.url = ress[0].avatar;
        }
        
      }
    );
  }


  //url = '';

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
        //console.log(this.url);
      }
    }
  }

  delete() {
    this.url = null;
    this._profile.deleteMyAvatar().subscribe(
      ress=>{
        this.openSnackBar(ress.message,'cancel');

      }
    );
  }

  onUpload() {
    let data = {'avatar':this.url};
    this._profile.uploadAvatar(data).subscribe(
      ress =>{
        this.openSnackBar(ress.message,'cancel');
      }
    );
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }
}
