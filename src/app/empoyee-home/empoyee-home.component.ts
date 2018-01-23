import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {EmployeeDataService} from '../DataService/DataService';
import {employee} from '../Models/Employee';
@Component({
  selector: 'app-empoyee-home',
  templateUrl: './empoyee-home.component.html',
  styleUrls: ['./empoyee-home.component.css']
})
export class EmpoyeeHomeComponent implements OnInit {
  fname:string="";
  lname:string="";
  email:string="";
  id:string="";
  status:boolean=false;
  FormHeader=""
  editCustomer:boolean=false;
  employees:Observable<employee[]>
test:any[];
  employeelist:employee[];
mappedlist:employee[]=[];
Dummyemployee:employee;

constructor(private dataservice:EmployeeDataService)
{ 
}

  ngOnInit() {
    this.dataservice.getEmployee().subscribe((tempdate) =>{  this.employeelist=tempdate;})
    ,err=>{
      console.log(err);
}
  }

  ShowRegForm=function(employee)
  {
    this.editCustomer=true;
    this.ResetValues();
    
  }
Save(regForm:NgForm)
  {
    alert(regForm);
    this.GetDummyObject(regForm);
    this.Addemployee(this.Dummyemployee);
  }
GetDummyObject(regForm:NgForm):employee
{
  this.Dummyemployee= new employee
  this.Dummyemployee.Email=regForm.value.email;
  this.Dummyemployee.Fname=regForm.value.fname;
  this.Dummyemployee.Lname=regForm.value.lname;
  this.Dummyemployee.ID=regForm.value.id;
  return this.Dummyemployee;
}
ResetValues(){
  this.fname="";
  this.lname="";
  this.email="";
  this.id="";
  this.FormHeader="Add"
}
Addemployee(e: employee)
{

  this.dataservice.AddEmployee(this.Dummyemployee).subscribe(res=>
    {
      this.employeelist.push(res);
      alert("Data added successfully !! ")
      this.editCustomer=false;
    })
    ,err=>
    {
      console.log("Error Occured " + err);
    }
}


}
