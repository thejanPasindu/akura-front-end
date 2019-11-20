import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-sch-summary',
  templateUrl: './sch-summary.component.html',
  styleUrls: ['./sch-summary.component.css']
})
export class SchSummaryComponent implements OnInit {

  constructor(
    private _summary: SummaryService,
  ) { }

  new_sch: Number;
  approved_sch: Number;
  rejected_sch: Number;
  spons_sch: Number;

  ngOnInit() {
    this._summary.schSummary().subscribe(
      ress => {
        this.new_sch = ress.new_sch;
        this.approved_sch = ress.approved_sch;
        this.rejected_sch = ress.rejected_sch;
        this.spons_sch = ress.spons_sch;
      }
    );
  }

}
