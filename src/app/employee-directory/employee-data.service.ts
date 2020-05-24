import { Employee } from './model/Employee.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public employees: Employee[] = [];
  constructor() { }

  pushEmployees(e: Employee) {
    this.employees.unshift(e);
  }

  getEmployees() {
    return this.employees;
  }
}
