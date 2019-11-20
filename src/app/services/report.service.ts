import { Injectable } from '@angular/core';
import { fields } from '../Financial/generate-report/generate-report.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(public http: HttpClient) { }

  public toogleType: any;
  public isLoading: boolean = false;
  public from: string;
  public to: string;
  public showPreview: boolean = false;
  public income: fields[] = [];
  public expence: fields[] = [];
  public select_report: string;
  public showIncome: boolean = false;
  public showExpence: boolean = false;
  private expenceUrl = 'http://127.0.0.1:8000/api/auth/expenseget';
  private incomeUrl = 'http://127.0.0.1:8000/api/auth/incomeget';
  private addIncomeUrl = 'http://127.0.0.1:8000/api/auth/incomeinsert';
  private addExpenceUrl = 'http://127.0.0.1:8000/api/auth/expenseinsert';
  private deleteField =  'http://127.0.0.1:8000/api/auth/deleteFields';
  private getStudentListUrl = 'http://127.0.0.1:8000/api/auth/loadStudentName';
  private getSponsorListUrl = 'http://127.0.0.1:8000/api/auth/loadSponsorName';

   httpoptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  getExpenses(toDate: string, fromDate: string) {
    return this.http.post<any>(this.expenceUrl, {
      'fromDate': fromDate,
      'toDate': toDate
    }, this.httpoptions);
  }

  getIncome(toDate: string, fromDate: string) {
    //console.log(formatDate(fromDate,"yyyy-MM-dd",'en-US',"+0530"));
    return this.http.post<any>(this.incomeUrl, {
      'fromDate': fromDate,
      'toDate': toDate
    }, this.httpoptions);
  }


  addIncome(dateFrom: string,dateTo:string, description: string, amount: number, path: string,deleteStatus: boolean) {
    console.log(dateFrom +" "+ amount+" "+ description)
    dateFrom = formatDate(dateFrom,"yyyy-MM-dd",'en-US','+0530');
    console.log(dateFrom);
    return this.http.post<any>(this.addIncomeUrl, {
      'fromDate': dateFrom,
      'toDate':dateTo,
      'discription': description,
      'amount': amount,
      'path': path,
      'status': deleteStatus
    }, this.httpoptions);
  }

  addExpence(date: string, description: string, amount: number, path: string,deleteStatus : boolean) {
    date = formatDate(date,"yyyy-MM-dd",'en-US','+0530');
    return this.http.post<any>(this.addExpenceUrl, {
      'date': date,
      'discription': description,
      'amount': amount,
      'path': path,
      'status': deleteStatus
    }, this.httpoptions);
  }
  deleteFields(id: number, type: string) {
    return this.http.post<any>(this.deleteField, {
      'id': id,
      'type': type,
    }, this.httpoptions);
  }

  getSponsorName(firstName: string, middleName: string, lastName: string){
    return this.http.post<any>(this.getSponsorListUrl, {
      'fname': firstName,
      'mname': middleName,
      'name' : lastName
    }, this.httpoptions);
  }

  





}

