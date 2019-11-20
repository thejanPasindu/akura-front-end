import { NgModule } from '@angular/core';
import { MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatCheckboxModule
} from '@angular/material';

const Mat = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  

  MatTableModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonToggleModule,
  MatCheckboxModule,
];
@NgModule({
  
  imports: [Mat],
  exports: [Mat]
})
export class MaterialModule { }
