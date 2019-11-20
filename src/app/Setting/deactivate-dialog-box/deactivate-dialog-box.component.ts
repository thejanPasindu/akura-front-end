import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-deactivate-dialog-box',
  templateUrl: './deactivate-dialog-box.component.html',
  styleUrls: ['./deactivate-dialog-box.component.css']
})
export class DeactivateDialogBoxComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private _settingService: SettingService,
    public dialogRef: MatDialogRef<DeactivateDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any //@Optional() is used to prevent error if no data is passed
  ) { 
    //console.log(data);
  }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
    });
  }

  onDeactivate(){
      this._settingService.confirmDeactivateAccount().subscribe(
        ress=>{
          //console.log(ress);
          this.openSnackBar(ress.message,'Cancel');
        }
      );
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  

}
