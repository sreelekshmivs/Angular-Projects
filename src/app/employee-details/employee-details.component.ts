import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee= new Employee();
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
    .subscribe(data => {
               
      data.forEach(element => {
        this.employee.id=element["id"];
        this.employee.firstName=element["firstName"];
        this.employee.lastName=element["lastName"];
        this.employee.emailId=element["emailId"];
        this.employee.DOB=element["DOB"];
        this.employee.categoryid=element["categoryid"];
      });
     
      console.log(data)
      //this.employee = data as Employee;
      
    }, error => console.log(error));
  }
  list(){
    this.router.navigate(['employees']);
  }

}
