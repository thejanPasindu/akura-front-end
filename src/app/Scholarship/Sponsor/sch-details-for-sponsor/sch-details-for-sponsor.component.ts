import { Component, OnInit } from '@angular/core';
import { SchDataPassService } from '../../../services/sch-data-pass.service';
import { ScholarshipApplyService } from 'src/app/services/scholarship-apply.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sch-details-for-sponsor',
  templateUrl: './sch-details-for-sponsor.component.html',
  styleUrls: ['./sch-details-for-sponsor.component.css']
})
export class SchDetailsForSponsorComponent implements OnInit {

  siblings = [];
  education = ['schoolStudent', 'universityStudent'];
  selectedValue = '';

  applierDetails = {
    fname: String,
    mname: String,
    name: String,
    dob: Date,
    no: String,
    street: String,
    city: String
  }; //this for store scholarship applier details

  schShip = {
    school: String,
    grade: Number,
    university: String,
    faculty: String,
    academicyear: Number,
    semester: Number,
    confirm_letter: String,
    l_year: Number,
    l_semester: Number,
    l_grade: Number,
    l_term: Number,
    last_result: Number,
    guardian_name: String,
    relationship: String,
    guardian_address: String,
    family_anual_income: Number,
    family_anual_expence: Number,
    suggest_amount:Number,
    user_id: Number
  };

  

  schId: Number;

  constructor(
    private _dataPass: SchDataPassService,
    private _scholarshipApplyService: ScholarshipApplyService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {

    this._dataPass.currentMessage.subscribe(
      message => {
        //console.log(message);
        this.selectedValue = message.registrationType;
        this.schId = message.id;
      }
    );

    this._scholarshipApplyService.getSchForSponsor(this.schId).subscribe(
      ress=>{
        console.log(ress);
        this.schShip = ress.details[0];
        this.applierDetails = ress.applierDetails[0];
        this.siblings = ress.siblings;
        
        this.schShip.l_grade = ress.result.school_grade;
        this.schShip.l_semester = ress.result.semester; 
        this.schShip.l_term = ress.result.term;
        this.schShip.l_year = ress.result.acadamic_year;
        this.schShip.last_result = ress.result.last_result;
        this.schShip.suggest_amount = ress.suggest_payment.amount;
       
      }
    );
  }

  //for send offer request
  onOffer(){
    this._scholarshipApplyService.sendOffer(this.schShip).subscribe(
      ress=>{
        this.openSnackBar(ress.message, 'Cancel');
      }
    );
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
