import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportService } from 'src/app/services/report.service';
import { Subscriber, generate } from 'rxjs';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { tokenKey } from '@angular/core/src/view';


@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {

  selectedFile: File = null;

  //form input varialbles
  public fromDate: string;
  public toDate: string;
  public amount: number;
  public description: string;
  public imageUrl: string;
  public spornser: string;
  public students: any;

  //functional variables
  public deleteStatus: boolean;
  public minDate = new Date();
  public imgURL: any = "path";
  public message: string;
  public successMsg: boolean = false;
  public imagePath;

  dateType: string;
  userType: boolean;
  isLoading: boolean = false;

  //form validations
  startDateFormControl = new FormControl('', [
    Validators.required
  ]);
  endDateFormControl = new FormControl('', [
    Validators.required
  ]);
  upladFormControl = new FormControl('', [
    Validators.required
  ]);
  amountFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
  ]);
  descriptionFormControl = new FormControl('', [
    Validators.required
  ]);
  option = new FormControl('', [
    Validators.required
  ]);

  formdata = new FormData();

  optionList: string[] = ['User1', 'User2', 'User3', 'User4', 'User5', 'User6'];

  sponsor = new FormControl();
  sponsorList: string[] = ['Sponsor1', 'sponsor2', 'sponsor3', 'sponsor4'];


  constructor(private http: HttpClient, public report: ReportService) { }

  ngOnInit() {

    this.userType = true;
    this.dateType = "Date"


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


  onUp() {
    console.log("inside Up;;;;;;");
    let httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    this.addIncomeData();

  }

  //income data submit to service
  addIncomeData() {
    if (this.userType == true) {
      console.log("insideIncoming");
      this.deleteStatus = false;
      this.report.addIncome(this.fromDate, this.toDate, this.description, this.amount, this.imgURL, this.deleteStatus).subscribe((data) => {
        console.log(data);
        this.isLoading = false;
        this.donesubmition();
      });
    }
    else {
      console.log("unsuccess..");
    }
  }

  //income form submission
  submitIncomeForm() {
    this.isLoading = true;
    console.log("submited..1234");
    this.addIncomeData();

    //reset the form
    this.imagePath = false;
    this.amountFormControl.reset();
    this.startDateFormControl.reset();
    this.endDateFormControl.reset();
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
    this.imgURL = "";
    this.message = "";
  }
}



