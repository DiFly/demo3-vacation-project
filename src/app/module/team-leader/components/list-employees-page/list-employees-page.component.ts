import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from '../../../../shared/models/employee-model';
import {EmployeeService} from '../../../../shared/services/employee.service';

@Component({
  selector: 'app-list-employees-page',
  templateUrl: './list-employees-page.component.html',
  styleUrls: ['./list-employees-page.component.scss']
})
export class ListEmployeesPageComponent implements OnInit {
  employees: EmployeeModel[];

  constructor(private employeeService: EmployeeService) {
    this.employees = new Array();
  }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

}
