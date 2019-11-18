import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { Category } from '../category';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee:Observable<Employee>;
  employees:Observable<Employee[]>;
  category:Observable<Category[]>
  constructor(private employeeService: EmployeeService,
              private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.employee=this.employeeService.getEmployeeList();
    this.employees=this.employeeService.getEmployeeList();
    this.category=this.employeeService.getCategoryList();
  }
  
  onOptionsSelected(value:number){
    console.log("the selected value is "+value);
    if(value==0)
    {
      this.employees=this.employeeService.getEmployeeList();
    }
    else
    {
      this.employees=this.employeeService.getCategory(value);
    }
    this.category=this.employeeService.getCategoryList();
  }
  employeeDetails(id: number){
    console.log("selected ID: " +id);
    this.router.navigate(['details', id]);
  }
}
