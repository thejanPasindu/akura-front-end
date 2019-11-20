import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";

import { ChatDataPassService } from '../../services/chat-data-pass.service';
import { MatDialog } from '@angular/material';
import { CommProfileComponent } from 'src/app/Profile/comm-profile/comm-profile.component';

@Component({
  selector: 'app-my-mentor',
  templateUrl: './my-mentor.component.html',
  styleUrls: ['./my-mentor.component.css']
})
export class MyMentorComponent implements OnInit {

  @Input() mentor:any;

  constructor(
    private _router: Router, 
    private _chatDataPass: ChatDataPassService,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
    //console.log(this.mentor);
  }

  gotoChatRoom(){
    this._chatDataPass.changeMessage(this.mentor);
    this._router.navigate(['dash2/mentHeader/chats']);
  }

  onDetails(): void {
    const dialogRef = this.dialog.open(CommProfileComponent, {
      width: '50%',
      height: '80%',
      data: {id: this.mentor.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
