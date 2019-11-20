import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sibiling',
  templateUrl: './add-sibiling.component.html',
  styleUrls: ['./add-sibiling.component.css']
})
export class AddSibilingComponent implements OnInit {

  education = ['school','university'];
  selectedValue:String;
  data ={
    sibling_name:'',
    grade_year:'',
    school_university:'',
    sibling_relationship:''
  };

  constructor() { }

  ngOnInit() {
  }

}
