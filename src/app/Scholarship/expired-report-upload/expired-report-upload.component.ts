import { Component, OnInit, Input } from '@angular/core';
import { ScholarshipApplyService } from 'src/app/services/scholarship-apply.service';
import { Router } from '@angular/router';
import { SchDataPassService } from 'src/app/services/sch-data-pass.service';
import { MatDialog } from '@angular/material';
import { CommProfileComponent } from 'src/app/Profile/comm-profile/comm-profile.component';

@Component({
  selector: 'app-expired-report-upload',
  templateUrl: './expired-report-upload.component.html',
  styleUrls: ['./expired-report-upload.component.css']
})
export class ExpiredReportUploadComponent implements OnInit {

  @Input() applier:any;
  
  constructor(
    private _scholarshipApplyService: ScholarshipApplyService,
    private _router: Router, 
    private _dataPass: SchDataPassService,
    public dialog: MatDialog,
  ) { }

  student = {fname:'', registrationType:''};

  ngOnInit() {

    this._scholarshipApplyService.getStudent(this.applier.student_id).subscribe(
      ress=>{
        this.student = ress;
        //console.log(this.student);
        
      }
    );

  }

  onView(){
    this._dataPass.changeMessage(this.applier);
    this._router.navigate(['dash2/schHeared/schDetails']); 
  }

  onDetails(): void {
    const dialogRef = this.dialog.open(CommProfileComponent, {
      width: '50%',
      height: '60%',
      data: {id: this.applier.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
