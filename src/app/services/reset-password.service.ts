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
export class ResetPasswordService {

  private _passwordResetUrl = 'http://127.0.0.1:8000/api/password/create';
  private _resetUrl = 'http://127.0.0.1:8000/api/password/reset';

  constructor(private http: HttpClient) { }

  onReset(userEmail) {
    return this.http.post<any>(this._passwordResetUrl, userEmail, httpOptions);
  }

  onFind(token){
    let _findUrl = `http://127.0.0.1:8000/api/password/find/${token}`;
    return this.http.get<any>(_findUrl,httpOptions);
  }

  onPasswordReset(user){
    return this.http.post<any>(this._resetUrl, user, httpOptions);
  }
}
