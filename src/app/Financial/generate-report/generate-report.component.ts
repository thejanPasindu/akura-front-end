import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { FormControl, Validators } from '@angular/forms';
//import {Genarateuser} from '../../genarateuser';
@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  constructor(public report: ReportService) { }

  // userModel = new Genarateuser('','','');

  dateFormControl = new FormControl('', [
    Validators.required
  ]);

  dateFormControl2 = new FormControl('', [
    Validators.required
  ]);

  public maxDate = new Date();

  submitIT() {
    this.report.showPreview = true;
    this.report.income = [];
    this.report.expence = [];

  }
  close() {
    this.report.showPreview = false;
  }
  ngOnInit() {
    // this.dummyData.forEach((field)=>{
    //   this.report.income.push(new fields(field));
    // }



  }

  showIncomeChange(event) {


    this.report.showPreview = false;
  }
  showExpenceChange(event) {

    this.report.showPreview = false;
  }

  testdata: any;
  // dummyData = [
  //   {
  //     'date': '2019-09-14',
  //     'description': 'hello world',
  //     'amount': '5600'
  //   }
  // ]




}


export class fields {

  public date: string;
  public discription: string;
  public amount: number;
  public id: number;

  constructor(data: any) {
    this.amount = data['amount'];
    this.discription = data['discription'];
    this.date = data['date'];
    this.id = data['id'];
  }

}