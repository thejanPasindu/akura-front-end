import { Component, OnInit } from '@angular/core';
import { ChatDataPassService } from '../../services/chat-data-pass.service';

import { ChatAppService } from '../../services/chat-app.service';
import { PusherServiceService } from 'src/app/services/pusher-service.service';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor(
    private _chatDataPass: ChatDataPassService,
    private _chatAppServise: ChatAppService,
    private _pusher:PusherServiceService
  ) { }

  receiver: any;
  rece = { 'receiver_id': null };
  chats: any; // for store msgs
  msg = { 'receiver_id': null, 'message': '' };


  ngOnInit() {
    this._chatDataPass.currentMessage.subscribe(message => this.receiver = message);
    //console.log(this.receiver);

    this.rece.receiver_id = this.receiver.id;
    this.msg.receiver_id = this.receiver.id;

    this._chatAppServise.GetMyChatService(this.rece).subscribe(
      message => {
        console.log(message);
        this.chats = message;
      });

    //for pusher servise
    this._pusher.setChannel(`MentorStudentMsg.${this.receiver.id}.${localStorage.getItem('akUIDura')}`);
    this._pusher.channel.bind('App\\Events\\MentorStudentMsgBroadcast', data => {
      console.log(data);
      //this.message = data.mentorStudentMsg.message;
      this.chats.push(data.mentorStudentMsg);
    });
  }

  onSend() {
    console.log(this.msg);
    this._chatAppServise.SendMessageService(this.msg).subscribe(
      message => {
        console.log(message);
        this.chats.push(message);
        this.msg.message = '';
      });

  }

}
