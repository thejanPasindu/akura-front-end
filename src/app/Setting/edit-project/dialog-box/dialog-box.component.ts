import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProject } from 'src/app/model/edit-project';
import { EditProjectService } from '../../../services/edit-project.service';

export interface TypesData {
  type: string;
  name:string;
  message: string;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(

    private _editProjectService: EditProjectService,

    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) //@Optional() is used to prevent error if no data is passed
    {
    //console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    }

    EditProject = new EditProject();

  ngOnInit() {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
    //this.dialogRef.close();
  }

 

}
