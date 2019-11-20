
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  //animal: 'panda' | 'unicorn' | 'lion';
  project_name: String,
  type: String,
  start_date:String,
  end_date: String,
  location: String,
  city: String,
  district: String,
  description: String,
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}


