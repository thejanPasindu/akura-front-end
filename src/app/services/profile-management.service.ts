import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileManagementService {

  private _profileUrl = 'http://127.0.0.1:8000/api/auth/profileDetais';
  private _profileSaveUrl = 'http://127.0.0.1:8000/api/auth/profileDetaisSave';
  private _avatarSaveUrl = 'http://127.0.0.1:8000/api/auth/profileAvatar';
  private _avatarGetUrl = 'http://127.0.0.1:8000/api/auth/getMyAvatar';
  private _avatarDeleteUrl = 'http://127.0.0.1:8000/api/auth/deleteAvatar';
  private _resetPasswordUrl = 'http://127.0.0.1:8000/api/auth/resetPassword';
  
  private _getUserProfileUrl = 'http://127.0.0.1:8000/api/auth/getUserProfile';
  private _userAvatarGetUrl = "http://127.0.0.1:8000/api/auth/getUserAvatar";

  constructor(private http: HttpClient) { }

  GetProfile(){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.get<any>(this._profileUrl,httpoptions);    
  }

  updateProfile(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._profileSaveUrl, data,httpoptions);  
  }


  uploadAvatar(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
   

    return this.http.post<any>(this._avatarSaveUrl, data,httpoptions);
    
   
  }

  getMyAvatar(){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.get<any>(this._avatarGetUrl,httpoptions);    
  }

  deleteMyAvatar(){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.get<any>(this._avatarDeleteUrl,httpoptions);    
  }

  resetPass(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._resetPasswordUrl, data,httpoptions);
  }


  CommonUserProfileDetailse(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._getUserProfileUrl, data,httpoptions);  
  }

  getUserAvatar(data){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.post<any>(this._userAvatarGetUrl, data,httpoptions);    
  }
}
