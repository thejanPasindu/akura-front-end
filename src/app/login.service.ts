import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Log } from './log';
import { Headers } from './headers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url='http://127.0.0.1:8000/api/auth/login';
  constructor(private _http:HttpClient) { }

  loggin(logg:Log){
    return this._http.post<any>(this._url,logg,Headers.httpOptions); //,Headers.httpOptions
  }
}