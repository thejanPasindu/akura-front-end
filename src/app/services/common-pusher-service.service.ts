import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class CommonPusherServiceService {

  pusher: any;
  channel: any;

  constructor(private http: HttpClient) {

    this.pusher = new Pusher('751a86e625ea92b7cf4c', {
      cluster: 'ap2', 
      encrypted: true
    });
    this.channel = this.pusher.subscribe('my-channel2');//`Chat.${localStorage.getItem('akUIDura')}`);
  }

  setChannel(newChannel: String) {
    this.channel = this.pusher.subscribe(newChannel);
  }
}
