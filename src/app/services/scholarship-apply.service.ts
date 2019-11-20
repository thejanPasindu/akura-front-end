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
export class ScholarshipApplyService {

  private _schApplyUrl = 'http://127.0.0.1:8000/api/auth/applyScholarship';
  private _schSiblingUrl = 'http://127.0.0.1:8000/api/auth/saveSibling';
  private _getStudebtTypeUrl = 'http://127.0.0.1:8000/api/auth/studentType';
  private _getNewSchListUrl = 'http://127.0.0.1:8000/api/auth/newSchList';
  private _getSchDetailsUrl = 'http://127.0.0.1:8000/api/auth/schDetails';
  private _rejectSchUrl = 'http://127.0.0.1:8000/api/auth/rejectApplication';
  private _getRejectedApplicationsUrl = 'http://127.0.0.1:8000/api/auth/rejectedApplicationList';
  private _approveUrl = 'http://127.0.0.1:8000/api/auth/approveApplication';
  private _getAprovedApplicationsUrl = 'http://127.0.0.1:8000/api/auth/approvedApplications';
  private _getSuggesentListUrl = 'http://127.0.0.1:8000/api/auth/suggesentsList';
  private _isAlredyApplyUrl = 'http://127.0.0.1:8000/api/auth/isAlredyApplied';
  private _updateDetailsURL = 'http://127.0.0.1:8000/api/auth/updateSch';
  private _deleteURL = 'http://127.0.0.1:8000/api/auth/cancelSch';
  private _schDetailsForSponsorURL = 'http://127.0.0.1:8000/api/auth/schDetailsForSponsor';
  private _offerSchURL = 'http://127.0.0.1:8000/api/auth/sponsorOfferSch';
  private _expReportURL = 'http://127.0.0.1:8000/api/auth/getExpReport';
  private _getStudentURL = 'http://127.0.0.1:8000/api/auth/getStudent';
  

  constructor(private http: HttpClient) { }


  getStudentType() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }


    return this.http.get<any>(this._getStudebtTypeUrl, httpoptions);
  }

  onSiblingSave(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._schSiblingUrl, data, httpoptions);
  }

  sendDetailse(formData: any) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }

    return this.http.post(this._schApplyUrl, formData, {
      reportProgress: true,
      observe: 'events',

    });
  }

  //this use for get sch-applications list
  getNewSchListService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._getNewSchListUrl, httpoptions);
  }

  //for get sch Details from back end
  getSchDetails(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._getSchDetailsUrl, data, httpoptions);
  }

  //this for reject scholarship
  onRejectScholarship(data) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._rejectSchUrl, data, httpoptions);
  }

  //this use for get sch-applications list
  getRejectedApplications() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._getRejectedApplicationsUrl, httpoptions);
  }

  //for approve scholarship
  sendApprove(data:any){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._approveUrl, data, httpoptions);
  }

   //this use for get sch-applications list
   getAprovedApplications() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._getAprovedApplicationsUrl, httpoptions);
  }

  //this use for get suggesent list for sponsor list
  getSuggestionsList() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._getSuggesentListUrl, httpoptions);
  }

  //is scholarship alredy applied
  isAlredyApply() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._isAlredyApplyUrl, httpoptions);
  }

  //for change sch details
  changeSchDetails(formData:any){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    //return this.http.post<any>(this._updateDetailsURL, data, httpoptions);
    return this.http.post(this._updateDetailsURL, formData, {
      reportProgress: true,
      observe: 'events',

    });
  }

  //use for delete sch
  onCancle() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.delete<any>(this._deleteURL, httpoptions);
  }

  //get sch details for sponsor
  getSchForSponsor(id:any) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(`${this._schDetailsForSponsorURL}/${id}`, httpoptions);
  }

   //for approve scholarship
   sendOffer(data:any){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._offerSchURL, data, httpoptions);
  }

  //get sch details for sponsor
  getExpireReportUploadList() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._expReportURL, httpoptions);
  }

  //for get student details
  getStudent(id){
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(`${this._getStudentURL}/${id}`, httpoptions);
  }
}
