import { Component, OnInit } from '@angular/core';
import { MatDialog, MatCalendarBody } from '@angular/material';
import { AddSibilingComponent } from '../add-sibiling/add-sibiling.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SchApply } from '../../model/sch-apply';
import { ScholarshipApplyService } from '../../services/scholarship-apply.service';

@Component({
  selector: 'app-sch-apply-form1',
  templateUrl: './sch-apply-form1.component.html',
  styleUrls: ['./sch-apply-form1.component.css']
})
export class SchApplyForm1Component implements OnInit {

  education = ['schoolStudent', 'universityStudent'];
  selectedValue: String;

  schShip = new SchApply('', '', '', '', '', '', '', '', '', '', '', '');

  constructor(
    public dialog: MatDialog,
    private _schApplyService: ScholarshipApplyService,
    private _snackBar: MatSnackBar,
  ) { }

  code = 0;//this used for check corectly uploaded details
  code_2 = 0;
  //for file upload
  fileData: File = null;
  formData = new FormData();

  isShow = false;

  siblings = [];

  siblingArray = { size: 0, siblings: [] };

  confermLetterURL: any = "../../assets/img/default.jpg";
  GNLetterURL: any = "../../assets/img/default.jpg";
  birthC1URL: any = "../../assets/img/default.jpg";
  birthC2URL: any = "../../assets/img/default.jpg";
  resultSheetURL: any = "../../assets/img/default.jpg";

 

  schDetails = {
    school: '',
    university: '',
    grade: '',
    academicyear: '',
    addrboarding: '',
    guardian_name: '',
    relationship: '',
    guardian_tp: '',
    guardian_address: '',
    family_anual_income: '',
    family_anual_expence: '',
    semester: '',
    l_year: '',
    l_semester: '',
    l_term: '',
    l_grade: '',

    confirm_letter: '',
    gn_certificate: '',
    birth_certificate_1: '',
    birth_certificate_2: '',
    last_result: '',
  };

  openDialog() {
    let dialogRef = this.dialog.open(AddSibilingComponent, {
      height: '500px',
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.siblings.push(result);
        this.siblingArray.size += 1;
      }
    });
  }

  onOk(result) {
    //this.siblingArray.ibling.push(result);
  }
  ngOnInit() {
    this._schApplyService.getStudentType().subscribe(
      ress => {
        //console.log(ress);
        this.selectedValue = ress.type;
      }
    );

    //this use for check, student is applied sch
    this._schApplyService.isAlredyApply().subscribe(
      ress => {
        //console.log(ress);
        this.schShip = ress.details[0];
        this.siblings = ress.siblings;



        this.schShip.l_grade = ress.result.school_grade;
        this.schShip.l_semester = ress.result.semester;
        this.schShip.l_term = ress.result.term;
        this.schShip.l_year = ress.result.acadamic_year;
        this.schShip.last_result = ress.result.last_result;

        this.schShip.guardian_name = ress.details[0].guardian_name;

        this.confermLetterURL = "http://127.0.0.1:8000/api/auth/imgConfirm/" + this.schShip.confirm_letter;
        this.GNLetterURL = "http://127.0.0.1:8000/api/auth/imgGN/" + this.schShip.gn_certificate;
        this.birthC1URL = "http://127.0.0.1:8000/api/auth/imgBirth/" + this.schShip.birth_certificate_1;
        this.birthC2URL = "http://127.0.0.1:8000/api/auth/imgBirth/" + this.schShip.birth_certificate_2;
        this.resultSheetURL = "http://127.0.0.1:8000/api/auth/imgResult/" + this.schShip.last_result;

        //console.log(this.schShip);
        this.isShow = true;
      },
      error => {
        this.isShow = false;
      }
    );

  }

  onApply() {

    this.siblingArray.siblings = this.siblings;

    this.formData.append('school', this.schShip.school);
    this.formData.append('university', this.schShip.university);
    this.formData.append('faculty', this.schShip.faculty);
    this.formData.append('grade', this.schShip.grade);
    this.formData.append('academicyear', this.schShip.academicyear);
    this.formData.append('addrboarding', this.schShip.addrboarding);
    this.formData.append('guardian_name', this.schShip.guardian_name);
    this.formData.append('relationship', this.schShip.relationship);
    this.formData.append('guardian_tp', this.schShip.guardian_tp);
    this.formData.append('guardian_address', this.schShip.guardian_address);
    this.formData.append('family_anual_income', this.schShip.family_anual_income);
    this.formData.append('family_anual_expence', this.schShip.family_anual_expence);
    this.formData.append('semester', this.schShip.semester);
    this.formData.append('l_year', this.schShip.l_year);
    this.formData.append('l_semester', this.schShip.l_semester);
    this.formData.append('l_term', this.schShip.l_term);
    this.formData.append('l_grade', this.schShip.l_grade);

    this._schApplyService.sendDetailse(this.formData).subscribe(
      ress => {
        console.log(ress);
        if (ress['body'] != undefined) {

          this.code_2 = ress['body']['code'];
        }
      }
    );//*/

    //console.log(this.siblings);
    if (this.siblings != []) {
      this._schApplyService.onSiblingSave(this.siblingArray).subscribe(
        message => {
          this.code = message.code;

        }
      );//*/
    }



    if ((this.code + this.code_2) >= 100) {
      this.openSnackBar('Successfully Apply!', 'Cancel');
    } else {
      this.openSnackBar('Invalid Details', 'Cancel');
    }

  }


  onChangedetais() {

    this.formData.append('school', this.schShip.school);
    this.formData.append('university', this.schShip.university);
    this.formData.append('faculty', this.schShip.faculty);
    this.formData.append('grade', this.schShip.grade);
    this.formData.append('academicyear', this.schShip.academicyear);
    this.formData.append('addrboarding', this.schShip.addrboarding);
    this.formData.append('guardian_name', this.schShip.guardian_name);
    this.formData.append('relationship', this.schShip.relationship);
    this.formData.append('guardian_tp', this.schShip.guardian_tp);
    this.formData.append('guardian_address', this.schShip.guardian_address);
    this.formData.append('family_anual_income', this.schShip.family_anual_income);
    this.formData.append('family_anual_expence', this.schShip.family_anual_expence);
    this.formData.append('semester', this.schShip.semester);
    this.formData.append('l_year', this.schShip.l_year);
    this.formData.append('l_semester', this.schShip.l_semester);
    this.formData.append('l_term', this.schShip.l_term);
    this.formData.append('l_grade', this.schShip.l_grade);
    this.formData.append('confirm_letter', this.schShip.confirm_letter);
    this.formData.append('gn_certificate', this.schShip.gn_certificate);
    this.formData.append('birth_certificate_1', this.schShip.birth_certificate_1);
    this.formData.append('birth_certificate_2', this.schShip.birth_certificate_2);
    this.formData.append('last_result', this.schShip.last_result);

    //console.log(this.schShip.guardian_name);
    this._schApplyService.changeSchDetails(this.formData).subscribe(
      ress => {
        if (ress['body'] != undefined) {
          this.openSnackBar(ress['body']['message'], 'cancel');
        }
      }
    );
  }

  //use for cancle scholarship
  onCancle() {
    this._schApplyService.onCancle().subscribe(
      ress => {
        //console.log(ress)
        this.openSnackBar(ress.message, 'cancel');
      }
    );
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }


  //for file upload
  uploadConfirmLetter(event) {
    console.log(this.schDetails.confirm_letter);
    let elem = event.target;
    if (elem.files.length > 0) {
      this.formData.append('confirm_letter_file', elem.files[0]);

      //below for real time update preview
      let reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.confermLetterURL = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }

  }

  uploadBirth1(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.formData.append('birth_certificate_1_file', elem.files[0]);

      //below for real time update preview
      let reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.birthC1URL = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  uploadBirth2(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.formData.append('birth_certificate_2_file', elem.files[0]);

      //below for real time update preview
      let reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.birthC2URL = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  uploadResult(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.formData.append('last_result_file', elem.files[0]);

      //below for real time update preview
      let reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.resultSheetURL = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  uploadGNLetter(event) {
    let elem = event.target;
    if (elem.files.length > 0) {
      this.formData.append('gn_certificate_file', elem.files[0]);
      //below for real time update preview
      let reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.GNLetterURL = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  typeChang(event) {
    if (event.target.value == 'school') {
      this.schShip.academicyear = '';
      this.schShip.semester = '';
      this.schShip.l_semester = '';
      this.schShip.l_year = '';
    }

    if (event.target.value == 'university') {
      this.schShip.grade = '';
      this.schShip.l_grade = '';
      this.schShip.l_term = '';
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
