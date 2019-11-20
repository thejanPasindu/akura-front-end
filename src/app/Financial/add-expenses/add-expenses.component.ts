import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { Subscriber, generate } from 'rxjs';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  constructor(public report: ReportService) { }


  //data input variables
  public date: string;
  public description: string;
  public amount: number;
  public imageUrl: string = 'www.Sampleurl.com';

  //functional variables
  public deleteStatus: boolean;
  public maxDate = new Date();
  isLoading: boolean = false;
  public successMsg: boolean = false;
  public imagePath;
  public imgURL: any = "path";
  public message: string;


  //form validations
  upladFormControl = new FormControl('', [
    Validators.required
  ]);
  dateFormControl = new FormControl('', [
    Validators.required
  ]);
  expenseamountFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
  ]);
  descriptionFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

  onUp() {
    console.log("inside Up;;;;;;");
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }

    this.addExpence();

  }

  //success message
  donesubmition() {
    setTimeout(() => {
      this.successMsg = true;
    }, 0);
     setTimeout(() => {
       this.successMsg = false;
     }, 5000);
  }

  //send expense data to service
  addExpence() {
    console.log("insideIncoming");
    this.deleteStatus = false;
    this.report.addExpence(this.date, this.description, this.amount, this.imgURL, this.deleteStatus).subscribe((data) => {
      console.log(data);
      this.isLoading = false;
      this.donesubmition();
    });
  }

  //submit form
  submitExpenseForm() {
    this.isLoading = true;
    console.log("submited..");
    this.addExpence();

    //reset the form
    this.imagePath = false;
    this.expenseamountFormControl.reset();
    this.dateFormControl.reset();
    this.descriptionFormControl.reset();
  }
  //upload and preview image
  preview(files) {
    if (files.length === 0)
      return;

    
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imgURL);
    }
  }

  cancelImage() {
    this.imagePath = null;
    this.imgURL = null;
    this.message = "";
  }
}


