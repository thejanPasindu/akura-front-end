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
export class EditProjectService {

  private _showAllTypesUrl = 'http://127.0.0.1:8000/api/auth/allType';
  private _editTypesUrl = 'http://127.0.0.1:8000/api/auth/editProject';

  constructor(private http: HttpClient) { }


  editType(application) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._editTypesUrl, application, httpoptions);
  }


  allTypeGetService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._showAllTypesUrl, httpoptions);
  }

  

}
