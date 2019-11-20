import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
} 



@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private _registerUrl = 'http://127.0.0.1:8000/api/auth/signup';
  private _loginUrl = 'http://127.0.0.1:8000/api/auth/login';
  private _authUrl = 'http://127.0.0.1:8000/api/auth/user';
  private _logoutUrl = 'http://127.0.0.1:8000/api/auth/logout';
  private _userRoleUrl = 'http://127.0.0.1:8000/api/auth/getRole';
  

  private  xx:boolean;
  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this._registerUrl, user, httpOptions);
  }

  login(user) {


    //console.log(localStorage.getItem('token'));
    return this.http.post<any>(this._loginUrl, user, httpOptions);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  onCheck() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
   

    return this.http.post<any>(this._authUrl, '',httpoptions);
    
   // return this.xx;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logUotService(){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.get<any>(this._logoutUrl,httpoptions);    
  }


  onActivate(token){

    let _activateUrl = `http://127.0.0.1:8000/api/auth/signup/activate/${token}`;
    return this.http.get<any>(_activateUrl, httpOptions);
    
  }

  GetRoleService(){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.get<any>(this._userRoleUrl,httpoptions);    
  }
}
