import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  


  private _createProjectUrl = 'http://127.0.0.1:8000/api/auth/noti';
  private _getNotificationUrl = 'http://127.0.0.1:8000/api/auth/getNotification';
  private _onMarkNotificationUrl = 'http://127.0.0.1:8000/api/auth/markNotification';

  constructor(private http: HttpClient) { }

  onGo() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._createProjectUrl, httpoptions);
  }

  getNotification() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._getNotificationUrl, httpoptions);
  }

  onMark() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._onMarkNotificationUrl, httpoptions);
  }
}
 