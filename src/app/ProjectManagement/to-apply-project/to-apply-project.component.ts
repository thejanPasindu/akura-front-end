import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ToApply } from 'src/app/model/to-apply';
import { ProjectService } from '../../services/project.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-to-apply-project',
  templateUrl: './to-apply-project.component.html',
  styleUrls: ['./to-apply-project.component.css']
})
export class ToApplyProjectComponent implements OnInit {

  Data = new FormData();
  projects: any;
  animal: string;
  name: string;

  @Input() toapply: ToApply;
  @Input() enrolle: Boolean;

  constructor(
    public dialog: MatDialog,
    private _projectService: ProjectService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
      
  }

  //set Dynamic classes
  setClasses() {
    let classes = {
      toapply: true,
      'is-participate': this.toapply.participate
    }
    return classes;
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        project_name: this.toapply.project_name,
        type: this.toapply.type,
        start_date: this.toapply.start_date,
        end_date: this.toapply.end_date,
        city: this.toapply.city,
        district: this.toapply.district,
        description: this.toapply.description,
        location: this.toapply.location
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  onEnroll() {
    this._projectService.onEnrollProject(this.toapply).subscribe(
      message => {
        this.openSnackBar(message.message, 'cancel');
        console.log(message);
      },
      error => {
        console.log(
          error
        );
        this.openSnackBar('Invalid input', 'cancel');
      }
    );

    this.enrolle = true;

  }


  onUnEnroll() {
    this._projectService.onUnEnrollProject(this.toapply).subscribe(
      message => {
        this.openSnackBar(message.message, 'cancel');
        console.log(message);
      },
      error => {
        console.log(
          error
        );
        this.openSnackBar('Invalid input', 'cancel');
      }
    );
    this.enrolle = false;


  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
