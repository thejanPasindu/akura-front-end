import { Component, OnInit } from '@angular/core';
import { ChatAppService } from '../../services/chat-app.service';


@Component({
  selector: 'app-my-mentors',
  templateUrl: './my-mentors.component.html',
  styleUrls: ['./my-mentors.component.css']
})
export class MyMentorsComponent implements OnInit {

  constructor(private _chatAppServise:ChatAppService) { }

  list = [];

  ngOnInit() {
    this._chatAppServise.MyMentorsListService().subscribe(
      ress => {
        this.list = ress
      }
    );
  }

}
