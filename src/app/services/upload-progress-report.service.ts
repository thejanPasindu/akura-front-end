import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class UploadPrograsReportService {

  private _baseUrl = 'http://127.0.0.1:8000/api/auth/file';
  private _nextTermGetUrl = 'http://127.0.0.1:8000/api/auth/student';

  constructor(private http: HttpClient) { }

  // sendFile(formData) { //line 3
  //   //assume your backend base url is http://127.0.0.1:8000
  //   let baseUrl = 'http://127.0.0.1:8000/api/auth/file';
  //   //let url = `${baseUrl}/file`;       //line 4
  //   return this.httpClient.post<any>(baseUrl,formData)
  // }

  // sendFile(formData: any) {
  //   let httpoptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'X-Requested-With': 'XMLHttpRequest',
  //       'Authorization':`Bearer ${localStorage.getItem('token')}`
  //     })
  //   }
   

  //   return this.http.post<any>(this._baseUrl, formData, httpoptions);

  sendFile(formData:any){
    const url = 'http://127.0.0.1:8000/api/auth/file';
    return this.http.post(url, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }


  nextTermGetService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._nextTermGetUrl, httpoptions);
  }
    
   // return this.xx;
  
}

