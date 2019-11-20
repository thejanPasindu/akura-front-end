import { Component, OnInit } from '@angular/core';
import { ScholarshipApplyService } from 'src/app/services/scholarship-apply.service';

@Component({
  selector: 'app-approved-sch-list',
  templateUrl: './approved-sch-list.component.html',
  styleUrls: ['./approved-sch-list.component.css']
})
export class ApprovedSchListComponent implements OnInit {

  constructor(
    private _scholarshipApplyService: ScholarshipApplyService
  ) { }

  list = [];

  ngOnInit() {

    this._scholarshipApplyService.getAprovedApplications().subscribe(
      ress=>{
        this.list = ress;
        console.log(ress);
      }
    );
  }

  
}
