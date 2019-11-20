import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {

  private _mentorListUrl = 'http://127.0.0.1:8000/api/auth/mentorList';
  private _studentListUrl = 'http://127.0.0.1:8000/api/auth/studentList';
  private _requestMentorUrl = 'http://127.0.0.1:8000/api/auth/mentoringRequest';
  private _acceptStudentUrl = 'http://127.0.0.1:8000/api/auth/confirmStudent';
  private _myMentorListUrl = 'http://127.0.0.1:8000/api/auth/myMentorsList';
  private _myStudentsListUrl = 'http://127.0.0.1:8000/api/auth/myStudentsList';
  private _getMyChatUrl = 'http://127.0.0.1:8000/api/auth/getchat';
  private _sendChatUrl = 'http://127.0.0.1:8000/api/auth/sendchat';

  constructor(private http: HttpClient) { }

  MentorListService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._mentorListUrl, httpoptions);
  }

  mentorRequestService(req) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.post<any>(this._requestMentorUrl, req, httpoptions);
  }

  StudentListService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._studentListUrl, httpoptions);
  }

  AcceptStudentService(req) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._acceptStudentUrl, req, httpoptions);
  }

  MyMentorsListService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._myMentorListUrl, httpoptions);
  }

  MyStudentsListService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._myStudentsListUrl, httpoptions);
  }

  GetMyChatService(req) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.post<any>(this._getMyChatUrl, req, httpoptions);
  }

  SendMessageService(req) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.post<any>(this._sendChatUrl, req, httpoptions);
  }
}
