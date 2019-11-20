import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SchDataPassService } from 'src/app/services/sch-data-pass.service';
import { MatDialog } from '@angular/material';
import { CommProfileComponent } from 'src/app/Profile/comm-profile/comm-profile.component';

@Component({
  selector: 'app-approved-sch',
  templateUrl: './approved-sch.component.html',
  styleUrls: ['./approved-sch.component.css']
})
export class ApprovedSchComponent implements OnInit {

  @Input() applier:any;
  
  constructor(
    private _router: Router, 
    private _dataPass: SchDataPassService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  onView(){
    this._dataPass.changeMessage(this.applier);
    this._router.navigate(['dash2/schHeared/schDetails']); 
  }

  onDetails(): void {
    const dialogRef = this.dialog.open(CommProfileComponent, {
      width: '50%',
      height: '60%',
      data: {id: this.applier.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
