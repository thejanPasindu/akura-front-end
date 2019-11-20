import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistrationService } from '../services/user-registration.service';
import { PusherServiceService } from '../services/pusher-service.service';
import { NotificationService } from '../services/notification.service';
import { CommonPusherServiceService } from '../services/common-pusher-service.service';
import { ProfileManagementService } from '../services/profile-management.service';

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.css']
})
export class DashboardNewComponent implements OnInit {

  screenWidth: any;

  constructor(
    private _authServise: UserRegistrationService,
    private _router: Router,
    private _pusher: CommonPusherServiceService,
    private _notifiService: NotificationService,
    private _profile: ProfileManagementService,
  ) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  Username = '';
  
  url: any; //for avatar url

  message: { 'name': String, 'message': String };
  notifications: any;
  tab = '';
  newNotifi = false;

  logOut() {
    this._authServise.logUotService().subscribe(
      message => {
        //console.log(message.message)
        if (message.message === 'Successfully logged out') {
          this._router.navigate(['/login']);
          localStorage.removeItem('token');
          localStorage.removeItem('akuserroleura');
          localStorage.removeItem('akUIDura');
        }
      }
    );
  }

  ngOnInit() {
    this._authServise.onCheck().subscribe(
      ress => {
        //console.log(ress);
        this.Username = ress.user.name;
        localStorage.setItem('akUIDura', ress.user.id);
        localStorage.setItem('akuserroleura', ress.role[0].name);
        this.tab = ress.role[0].name;
        //console.log(localStorage.getItem('akUIDura'));
      }
    );

    this._authServise.GetRoleService().subscribe(
      ress => {
        localStorage.setItem('akuserroleura', ress[0].name);
        this.tab = ress[0].name;
      });
    this.tab = localStorage.getItem('akuserroleura');


    /******************This for notification read ***************************/

    //for pusher servise
    this._pusher.setChannel(`CommChannel.${localStorage.getItem('akUIDura')}`);
    this._pusher.channel.bind('App\\Events\\CommNotification', data => {
      //console.log(data);
      this.notifications.push(data);
      this.newNotifi = true;
      //console.log(this.notifications);
    });

    //for startup notifications
    this._notifiService.getNotification().subscribe(
      ress => {
        console.log(ress);
        this.notifications = ress;
        if (ress.length != 0) {
          if (ress[0].read_at == null) {
            this.newNotifi = true;
          }
        }
      },
      error => {
        console.log(error)
      }
    );

    /*********************** This for get avatar *************************/
    this._profile.getMyAvatar().subscribe(
      ress=>{
        //console.log(ress);
        if(ress.length != 0){
          this.url = ress[0].avatar;
        }
        
      }
    );
  }

  onProfile() {
    this._router.navigate(['/dash2/profile']);
  }

  onSetting() {
    this._router.navigate(['/dash2/setting']);
  }

  onMark() {
    //this.notifications = null;
    this._notifiService.onMark().subscribe(
      ress => console.log(ress)
    );
    this.newNotifi = false;
  }

  onNotifiClick(event) {
    console.log(event.target.value);
    if(event.target.value == 'scholarship'){
      this._router.navigate(['/dash2/schHeared/newSchList']); 
    }else if(event.target.value == 'reportUploadRem'){
      this._router.navigate(['/dash2/schHeared/upProgRepo']); 
    }
  }

}
