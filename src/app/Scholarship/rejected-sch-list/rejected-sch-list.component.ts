import { Component, OnInit } from '@angular/core';
import { ScholarshipApplyService } from 'src/app/services/scholarship-apply.service';

@Component({
  selector: 'app-rejected-sch-list',
  templateUrl: './rejected-sch-list.component.html',
  styleUrls: ['./rejected-sch-list.component.css']
})
export class RejectedSchListComponent implements OnInit {

  constructor(private _scholarshipApplyService: ScholarshipApplyService) { }

  list = [];

  ngOnInit() {
    this._scholarshipApplyService.getRejectedApplications().subscribe(
      ress=>{
        this.list = ress
      }
    );
  }

}
