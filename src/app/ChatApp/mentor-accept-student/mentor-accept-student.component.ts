import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ChatAppService } from '../../services/chat-app.service';

@Component({
  selector: 'app-mentor-accept-student',
  templateUrl: './mentor-accept-student.component.html',
  styleUrls: ['./mentor-accept-student.component.css']
})
export class MentorAcceptStudentComponent implements OnInit {

  @Input() student:any;
  @Output() afterAccept: EventEmitter<any> = new EventEmitter();

  constructor(
    private _chatAppServise:ChatAppService,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit() {
  }

  onAccept(){
    this._chatAppServise.AcceptStudentService(this.student).subscribe(
      message=>{
        //console.log(message)
        this.openSnackBar(message.message,'cancel')
      }
    );

    this.afterAccept.emit(this.student);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
