import { Component, OnInit } from '@angular/core';
import { UploadPrograsReportService } from '../../services/upload-progress-report.service';

@Component({
  selector: 'app-upload-prograss-report',
  templateUrl: './upload-prograss-report.component.html',
  styleUrls: ['./upload-prograss-report.component.css']
})
export class UploadPrograssReportComponent implements OnInit {

  studentType : String;

  constructor(private _uploadProgressReport: UploadPrograsReportService) { }

  uploadReport = { acadamic_year: '', semester: '', school_grade: '', term:'', myfile: '' };
  fileData: File = null;
  formData = new FormData();
  type : String;
  types = ['universityStudent', 'schoolStudent'];
  uploadBox = '';
  progressURL: any = "../../assets/img/default.jpg";

  ngOnInit() {
    this._uploadProgressReport. nextTermGetService().subscribe(
      ress=>{
        console.log(ress);
        this.uploadReport.acadamic_year = ress.acadamic_year;
        this.uploadReport.semester = ress.semester;
        this.uploadReport.school_grade = ress.grade;
        this.uploadReport.term = ress.term;
        this.type = ress.type;
        console.log(this.type);
      },
      error => {
        if(error.status == 404){
          //console.log(error);
          this.uploadBox = error.error.message;
        }
      }
    );
  }

  onUpload() {
    //this.fileData = <File>target.myfile[0];

    this._uploadProgressReport.sendFile(this.formData).subscribe( //line8
      (response) => {
        //response code
        console.log(response);
      });
  } 

  uploadFile(event) {    //line 1
    let elem = event.target;  //line 2
    // console.log(elem.files);
    if (elem.files.length > 0) {     //line 3
      this.formData.append('myfile', elem.files[0]);  //line 5
      // this.formData.append('student_id', this.uploadReport.studentId);
      this.formData.append('acadamic_year', this.uploadReport.acadamic_year);
      this.formData.append('semester', this.uploadReport.semester);
      this.formData.append('school_grade', this.uploadReport.school_grade);
      this.formData.append('term', this.uploadReport.term);

      //below for real time update preview
      let reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.progressURL = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
