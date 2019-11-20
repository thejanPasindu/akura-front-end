import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../../services/chat-app.service'; 

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  constructor(private _chatAppServise:ChatAppService) { }
  
  list = [];
  ngOnInit() {
    this._chatAppServise.MentorListService().subscribe(
      message=>{
        this.list = message
      }
    );
  }

  afterRequest(men:any){
    //console.log('jsdb');
    this.list = this.list.filter(mentor => mentor.mentor_id !== men.mentor_id);
  }
}
