import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../../services/chat-app.service';


@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {

  constructor(private _chatAppServise:ChatAppService) { }

  list = [];

  ngOnInit() {
    this._chatAppServise.MyStudentsListService().subscribe(
      ress => {
        this.list = ress
      }
    );
  }

}
