import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private _showAllRolesUrl = 'http://127.0.0.1:8000/api/auth/allRoles';
  private _showUserDetails = 'http://127.0.0.1:8000/api/auth/detail';
  private _editUserRole = 'http://127.0.0.1:8000/api/auth/editRole';
  private _deactivateAccountUrl = 'http://127.0.0.1:8000/api/auth/deactivate';
  private _activateAccountUrl = 'http://127.0.0.1:8000/api/auth/activate';
  private _confirmDeactivateAccountUrl = 'http://127.0.0.1:8000/api/auth/confirmDeactivate'

  constructor(private http: HttpClient) { }

  allRoleGetService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._showAllRolesUrl, httpoptions);
  }



  userDetailService(searchData) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      })
    }
    return this.http.post<any>(this._showUserDetails, searchData, httpoptions);
  }


  updateRole(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._editUserRole, data,httpoptions);
  }

  deactivateAccount(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._deactivateAccountUrl, data,httpoptions);
  }

  activateAccount(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._activateAccountUrl, data,httpoptions);
  }

  confirmDeactivateAccount() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._confirmDeactivateAccountUrl, httpoptions);
  }
}
