import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../../services/chat-app.service';

@Component({
  selector: 'app-mentor-accept',
  templateUrl: './mentor-accept.component.html',
  styleUrls: ['./mentor-accept.component.css']
})
export class MentorAcceptComponent implements OnInit {


  constructor(private _chatAppServise:ChatAppService) { }

  list = [];

  ngOnInit() {

    this._chatAppServise.StudentListService().subscribe(
      message=>{
        //console.log(message);
        this.list = message
      }
    );

  }

  afterAccept(student:any){
    this.list = this.list.filter(s => s.student_id !== student.student_id);
  }

}
