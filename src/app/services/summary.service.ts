import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private _schSummaryUrl = 'http://127.0.0.1:8000/api/auth/schSummary';
 
  constructor(private http: HttpClient) { }


  schSummary() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._schSummaryUrl, httpoptions);
  }

}
