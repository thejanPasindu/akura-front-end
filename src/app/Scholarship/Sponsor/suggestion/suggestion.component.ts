import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SchDataPassService } from 'src/app/services/sch-data-pass.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  @Input() applier: any;

  constructor(
    private _router: Router,
    private _dataPass: SchDataPassService,
  ) { }

  ngOnInit() {
  }

  checkSuggestion(){
    this._dataPass.changeMessage(this.applier);
    this._router.navigate(['dash2/schHeared/schDetailsForSponsor']);
  }

}
