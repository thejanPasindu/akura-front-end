import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-creat-project',
  templateUrl: './creat-project.component.html',
  styleUrls: ['./creat-project.component.css']
})
export class CreatProjectComponent implements OnInit {

  myDate = new Date();
  managers: any;
  districts: any;
  coordinators:any;
  duplicate = false;
  types:any;
 
  //endDate = new Date(this.start_date);

  constructor(
    private _projectService: ProjectService,
    private _snackBar: MatSnackBar,
  ) { }

  projectModel = new Project('', null, null, null, null, null, '', '', '', null, '', null,'',null);

  ngOnInit() {
    //for get project managers list
    this._projectService.projectManagerGetService().subscribe(
      ress => {
        this.managers = ress;
      },
      error => {
        if (error.status == 404) {
        }
      }
    );

    //For get project corrdinators list
    this._projectService.projectCoordinatorGetService().subscribe(
      ress => {
        this.coordinators = ress;
      },
      error => {
        if (error.status == 404) {
        }
      }
    );

    //For get districts list
    this._projectService. districtGetService().subscribe(
      ress => {
        this.districts = ress;
      },
      error => {
        if (error.status == 404) {
          //console.log(error);
          //this.uploadBox = error.error.message;
        }
      }
    );

    //For get project Type list
    this._projectService. typeGetService().subscribe(
      ress => {
        this.types = ress;
      },
      error => {
        if (error.status == 404) {
        }
      }
    );
  }

  onCreateProject() {
    //console.log(this.projectModel.project_type);
    this._projectService.onCreatProject(this.projectModel).subscribe(
      message => {
        //console.log(message)
        this.openSnackBar(message.message, 'cancel');
      },
      error => {
        console.log(
          error
        );
        this.openSnackBar('Invalid input', 'cancel');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  //For prevent duplication of project coordinator
  changeCoordinator(){
    if(this.projectModel.project_coordinator1==this.projectModel.project_coordinator2){
      this.duplicate = true;
    }
    else{
      this.duplicate = false;
    }
  }


}
