import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { fields } from '../generate-report/generate-report.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-finance',
  templateUrl: './delete-finance.component.html',
  styleUrls: ['./delete-finance.component.css']
})
export class DeleteFinanceComponent implements OnInit {

  constructor(
    public report:ReportService
    
    ) { }

    fromFormControl = new FormControl('',[
      Validators.required
    ]);
    toFormControl = new FormControl('',[
      Validators.required
    ]);

  ngOnInit() {
    this.report.toogleType="income";
    this.report.income=[];
    this.report.expence=[];
    this.report.showIncome=false;
    this.report.showExpence=false;
  }

  deleteField(id:number,type:string){
    console.log(id +"  "+ type)
    this.report.deleteFields(id,type).subscribe((result)=>{
      console.log(result);
      this.getData();
    })
  }



  getData(){
    this.report.income=[];
    this.report.expence=[];
    //console.log(this.report.to+" "+this.report.from)
    if(this.report.toogleType=="income"){
    console.log("ooo");
      this.report.showExpence=false;
      this.report.showIncome=true;;
      this.report.getIncome(this.report.to,this.report.from).subscribe((data)=>{
        data.forEach(element => {
          //console.log(element);
          this.report.income.push(new fields(element));
          
        });
        console.log("show");
        
        //this.report.isLoading=false;
        //spinner Off
      });
    }else if(this.report.toogleType=="expense"){
    console.log("oooh");
      this.report.showIncome=false;
      this.report.showExpence=true;
      this.report.getExpenses(this.report.to,this.report.from).subscribe((data)=>{
        data.forEach(element => {
          this.report.expence.push(new fields(element));
          
        });
        //this.report.isLoading=false;
       

      })
    }
  }
}
