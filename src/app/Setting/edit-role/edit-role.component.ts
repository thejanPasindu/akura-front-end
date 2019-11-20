import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingService } from '../../services/setting.service';
import { EditRole } from 'src/app/model/edit-role';
import { UserDetails } from 'src/app/model/user-details';


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  edit_roleModel = new EditRole('');//meka use kranne email 1 yawanna
  user_detailsModel = new UserDetails(null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

  roles: any;
  details: any;
  data:any;

  searchData = { name:'', id: Number };//for load user role to the drop down box
  DeactivateUser = { email:''};

  // role_id = this.roles.value;
  // user_id = this.user_detailsModel.id;
  //updateData = {role_id:3, user_id:8, role:'coordinator'};//for edit user role





  constructor(
    private _settingService: SettingService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this._settingService.allRoleGetService().subscribe(
      ress => {
        this.roles = ress;
        console.log(this.roles);
      },
      error => {
        if (error.status == 404) {
          console.log(error);
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onSearch() {
    //console.log(this.edit_roleModel);
    this._settingService.userDetailService(this.edit_roleModel).subscribe(
      ress => {
        //console.log(ress);
        this.user_detailsModel = ress[0];
        this.user_detailsModel.sname = ress[0].name;
        console.log(this.user_detailsModel);
        this.DeactivateUser.email = ress.email;
      },
      error => {
        if (error.status == 404) {
          console.log(error);
        }
      }
    );
  }

  onEditRole() {
    console.log(this.searchData);
    let data = { user_id:this.user_detailsModel.id, role_id:this.searchData.id };
    this._settingService.updateRole(data).subscribe(
      ress => {
        console.log(ress);
        if ('Successfully updated!' == ress.message) {
          this.openSnackBar(ress.message, 'cancel');
        }
      }
    );
  }

  onDeactivate() {
    let data = { email:this.user_detailsModel.email };
    this._settingService.deactivateAccount(data).subscribe(
      ress => {
        console.log(ress);
        if ('Successfully deactivated account!' == ress.message) {
          this.openSnackBar(ress.message, 'cancel');
        }
      }
    );
    this.user_detailsModel.active = 0;
  }

  onActivate() {
    let data = { email:this.user_detailsModel.email };
    this._settingService.activateAccount(data).subscribe(
      ress => {
        console.log(ress);
        if ('Successfully activated account!' == ress.message) {
          this.openSnackBar(ress.message, 'cancel');
        }
      }
    );
    this.user_detailsModel.active = 1;
  }

}
