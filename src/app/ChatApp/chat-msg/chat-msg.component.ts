import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.css']
})
export class ChatMsgComponent implements OnInit {

  @Input() chat:any;
  @Input() receiver:any;
  constructor() { }

  msgName = '';
  side = '';
  
  ngOnInit() {
    if( this.chat.receiver_id == this.receiver.id){
      this.msgName = 'You';  
      this.side = 'right';   
    }else{
      this.msgName = this.receiver.name;
      this.side = 'left';
    }
  }

  setClassForMsg(){
    let classes = {
      'alert ': true,
     // 'flexleft ': this.chat.receiver_id != this.receiver.id,
      'alert-success': this.chat.receiver_id != this.receiver.id,
      //'flexright': this.chat.receiver_id == this.receiver.id,
      'alert-secondary': this.chat.receiver_id == this.receiver.id,  
    }
    return classes;
  }

  setClassForUser(){
    let classes = {
      'flexleft ': this.chat.receiver_id != this.receiver.id,
      'flexright': this.chat.receiver_id == this.receiver.id, 
    }
    return classes;
  }


}
