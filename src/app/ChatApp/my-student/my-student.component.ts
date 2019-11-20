import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { ChatDataPassService } from '../../services/chat-data-pass.service';
import { MatDialog } from '@angular/material';
import { CommProfileComponent } from 'src/app/Profile/comm-profile/comm-profile.component';

@Component({
  selector: 'app-my-student',
  templateUrl: './my-student.component.html',
  styleUrls: ['./my-student.component.css']
})
export class MyStudentComponent implements OnInit {

  @Input() student:any;
  
  constructor(
    private _router: Router, 
    private _chatDataPass: ChatDataPassService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    console.log(this.student);
  }

  gotoChatRoom(){
    this._chatDataPass.changeMessage(this.student);
    this._router.navigate(['dash2/mentHeader/chats']);
  }

  onDetails(): void {
    const dialogRef = this.dialog.open(CommProfileComponent, {
      width: '50%',
      height: '60%',
      data: {id: this.student.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
