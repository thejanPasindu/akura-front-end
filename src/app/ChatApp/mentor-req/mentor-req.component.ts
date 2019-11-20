import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ChatAppService } from '../../services/chat-app.service';
import { MatDialog } from '@angular/material';
import { CommProfileComponent } from 'src/app/Profile/comm-profile/comm-profile.component';


@Component({
  selector: 'app-mentor-req',
  templateUrl: './mentor-req.component.html',
  styleUrls: ['./mentor-req.component.css']
})
export class MentorReqComponent implements OnInit {

  @Input() mentor:any;
  @Output() afterRequest: EventEmitter<any> = new EventEmitter();

  constructor(
    private _chatAppServise:ChatAppService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
    //console.log(this.mentor);
  }

  onRequest(){
    this._chatAppServise.mentorRequestService(this.mentor).subscribe(
      message=>{
        //console.log(message)
        this.openSnackBar(message.message,'cancel')
      }
    );
    
    this.afterRequest.emit(this.mentor);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onDetails(): void {
    const dialogRef = this.dialog.open(CommProfileComponent, {
      width: '50%',
      height: '80%',
      data: {id: this.mentor.mentor_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
