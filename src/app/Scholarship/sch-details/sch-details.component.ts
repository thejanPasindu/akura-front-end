import { Component, OnInit } from '@angular/core';
import { SchApply } from 'src/app/model/sch-apply';
import { SchDataPassService } from 'src/app/services/sch-data-pass.service';
import { ScholarshipApplyService } from 'src/app/services/scholarship-apply.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';
import { CommProfileComponent } from 'src/app/Profile/comm-profile/comm-profile.component';

@Component({
  selector: 'app-sch-details',
  templateUrl: './sch-details.component.html',
  styleUrls: ['./sch-details.component.css']
})
export class SchDetailsComponent implements OnInit {

  constructor(
    private _dataPass:SchDataPassService,
    private _scholarshipApplyService: ScholarshipApplyService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
     ) { }

  schShip = new SchApply('', '', '', '', '', '', '', '', '', '', '',''); 
  siblings = [];
  applierDetails ={fname:String, mname:String, name:String, dob:Date, cnumber:Number, no:String, street:String, city:String}; //this for store scholarship applier details
  
  scholarshipPayment:Number;
  

  url:any;
  education = ['schoolStudent', 'universityStudent'];
  selectedValue = '';
  data = {id:-1};

  ngOnInit(  
  ) {

    this._dataPass.currentMessage.subscribe(
      message => {
        //console.log(message);
        this.selectedValue = message.registrationType;
        this.data.id = message.id;
      }
    );

    this._scholarshipApplyService.getSchDetails(this.data).subscribe(
      ress=>{
        //console.log(ress);

        this.schShip = ress.details[0];
        this.siblings = ress.siblings;
        this.applierDetails = ress.applierDetails[0];


        this.schShip.l_grade = ress.result.school_grade;
        this.schShip.l_semester = ress.result.semester;
        this.schShip.l_term = ress.result.term;
        this.schShip.l_year = ress.result.acadamic_year;
        this.schShip.last_result = ress.result.last_result;
        //console.log(this.applierDetails);
      },
      error=>{
        this.url = error.error.text;
        //console.log(this.url);
      }
    );
  }


  onReject(){
    let sch = {user_id:this.schShip.user_id};
    //console.log(sch);
    this._scholarshipApplyService.onRejectScholarship(sch).subscribe(
      ress=>{
        //console.log(ress);
        if(ress.status == 97){
          this.openSnackBar(ress.message, 'Cancel');
          this._router.navigate(['dash2/schHeared/rjcSchs']);
        }
      }
    );
  }

  //for approve scholarship
  onApprove(){
    let sch = { user_id:this.schShip.user_id, payment:this.scholarshipPayment };
    this._scholarshipApplyService.sendApprove(sch).subscribe(
      ress=>{
        if(ress.status == 97){
          this.openSnackBar(ress.message, 'Cancel');
          this._router.navigate(['dash2/schHeared/aprSchs']);
        }
      }
    );
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  onDetails(): void {
    const dialogRef = this.dialog.open(CommProfileComponent, {
      width: '50%',
      height: '60%',
      data: {id: this.data.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
