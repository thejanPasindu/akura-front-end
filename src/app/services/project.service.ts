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
export class ProjectService {

  private _createProjectUrl = 'http://127.0.0.1:8000/api/auth/createProject';
  private _projectManagerUrl = 'http://127.0.0.1:8000/api/auth/projectManager';
  private _districtUrl = 'http://127.0.0.1:8000/api/auth/district';
  private _allProjectUrl = 'http://127.0.0.1:8000/api/auth/allProject';
  private _searchProjectUrl = 'http://127.0.0.1:8000/api/auth/searchProject';
  private _projectCoordinatorUrl = 'http://127.0.0.1:8000/api/auth/projectCoordinator';
  private _projectTypeUrl = 'http://127.0.0.1:8000/api/auth/type';
  private _enrollProjectUrl = 'http://127.0.0.1:8000/api/auth/enrollWorkshop';
  private _unEnrollProjectUrl = 'http://127.0.0.1:8000/api/auth/unEnrollWorkshop';
  private _alredyEnrolledProjectUrl = 'http://127.0.0.1:8000/api/auth/getAlredyEnrolled'
 
  constructor(private http: HttpClient) { }

  onCreatProject(application) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }


    return this.http.post<any>(this._createProjectUrl, application, httpoptions);
  }

  projectManagerGetService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._projectManagerUrl, httpoptions);
  }

  projectCoordinatorGetService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._projectCoordinatorUrl, httpoptions);
  }


  districtGetService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._districtUrl, httpoptions);
  }


  typeGetService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._projectTypeUrl, httpoptions);
  }

  

  projectSearchService(searchData) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._searchProjectUrl, searchData, httpoptions);
  }
  

  allProjectService() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._allProjectUrl, httpoptions);
  }

  onEnrollProject(application) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._enrollProjectUrl, application, httpoptions);
  }

  onUnEnrollProject(application) {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.post<any>(this._unEnrollProjectUrl, application, httpoptions);
  }

  onAlredyEnroll() {
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.http.get<any>(this._alredyEnrolledProjectUrl, httpoptions);
  }
}
