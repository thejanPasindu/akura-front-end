import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProject } from 'src/app/model/edit-project';
import { EditProjectService } from '../../services/edit-project.service';

import { MatDialog, MatTable } from '@angular/material';
import { Type } from '@angular/compiler';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
//import { DialogBoxComponent } from './dialog-box/dialog-box.component';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  // public dataSource = new EditProjectService<_editProjectService>()
  public displayedColumns = ['type', 'action'];


  dataSource = null;
  @ViewChild(MatTable) table: MatTable<any>;
  // @ViewChild(MatTable) table: MatTable<any>;

  types: any;
  //table: any;

  constructor(
    private _editProjectService: EditProjectService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  EditProject = new EditProject();

  ngOnInit() {
    this._editProjectService.allTypeGetService().subscribe(
      ress => {
        //this.types = ress;
        this.dataSource = ress;
        //console.log(this.dataSource);
      },
      error => {
        if (error.status == 404) {
          //console.log(error);
        }
      }
    );
  }

  // onAddType(){
  //   this._editProjectService.onAddType(this.EditProject).subscribe(
  //     message => {
  //       this.openSnackBar(message.message, 'cancel');
  //     },
  //     error => {
  //       console.log(
  //         error
  //       );
  //       this.openSnackBar('Invalid input', 'cancel');
  //     } 
  //   );
  // }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });
    //console.log(obj);
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result.data);
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }

      if (result.event == 'Cancel') {
        console.log();
      }else{
        this._editProjectService.editType(result.data).subscribe(
          ress => {
            //console.log(ress);
            this.openSnackBar(ress.message, 'Cancel');
          }
        );
      }

    });
  }

  addRowData(row_obj) {
    this.dataSource.push({
      type: row_obj.type
    });
    this.table.renderRows();

  }

  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.type = row_obj.type;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }

}
