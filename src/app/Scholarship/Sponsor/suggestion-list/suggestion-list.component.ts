import { Component, OnInit } from '@angular/core';
import { ScholarshipApplyService } from 'src/app/services/scholarship-apply.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {

  list = [];

  constructor(private _scholarshipApplyService: ScholarshipApplyService) { }

  ngOnInit() {
    this._scholarshipApplyService.getSuggestionsList().subscribe(
      ress=>{
        this.list=ress;
      }
    );
  }

}
