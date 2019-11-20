import { Component, OnInit } from '@angular/core';
import { ScholarshipApplyService } from '../../services/scholarship-apply.service';


@Component({
  selector: 'app-sch-views',
  templateUrl: './sch-views.component.html',
  styleUrls: ['./sch-views.component.css']
})
export class SchViewsComponent implements OnInit {

  constructor(private _scholarshipApplyService: ScholarshipApplyService) { }

  list = [];

  ngOnInit() {
    this._scholarshipApplyService.getNewSchListService().subscribe(
      ress => {
        this.list = ress;
      }
    );
  }

}
