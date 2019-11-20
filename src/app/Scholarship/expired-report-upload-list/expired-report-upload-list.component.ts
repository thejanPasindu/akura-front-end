import { Component, OnInit } from '@angular/core';
import { ScholarshipApplyService } from 'src/app/services/scholarship-apply.service';

@Component({
  selector: 'app-expired-report-upload-list',
  templateUrl: './expired-report-upload-list.component.html',
  styleUrls: ['./expired-report-upload-list.component.css']
})
export class ExpiredReportUploadListComponent implements OnInit {

  constructor(
    private _scholarshipApplyService: ScholarshipApplyService,
    ) { }

  list = [];

  ngOnInit() {
    this._scholarshipApplyService.getExpireReportUploadList().subscribe(
      ress=>{
        //console.log(ress);
        this.list = ress;
      }
    );
  }

}
