import { EmployeeDataService } from './../employee-data.service';
import { Employee, PersonalInformation } from './../model/Employee.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  public form: FormGroup;
  public today: Date;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    if (day === 0 || day === 6) {
      return false;
    } else {
      return true;
    }
  }

  constructor(private fb: FormBuilder, private dataService: EmployeeDataService) {
    this.today = new Date();
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      nationality: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      primaryLanguage: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      salary: ['', Validators.required],
      dateJoined: ['', Validators.required],
      skills: ['', Validators.required],
      weeklyHours: ['', Validators.required],
      daysOff: ['', Validators.required],
      jobTitle: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  addEmployee() {
    const p: PersonalInformation = this.addPersonalInfo();
    const e: Employee = {
      personalInfo: p,
      salary: this.salary.value,
      dateJoined: this.dateJoined.value,
      skills: this.skills.value,
      weeklyHours: this.weeklyHours.value,
      daysOff: this.daysOff.value,
      jobTitle: this.jobTitle.value
    };

    this.dataService.pushEmployees(e);

  }

  addPersonalInfo() {
    const p: PersonalInformation = {
      firstName: this.firstName.value,
      middleName: this.middleName.value,
      lastName: this.lastName.value,
      address: this.address.value,
      age: this.age.value,
      email: this.email.value,
      maritalStatus: this.maritalStatus.value,
      nationality: this.nationality.value,
      phoneNumber: this.phoneNumber.value,
      primaryLanguage: this.primaryLanguage.value
    };

    return p;
  }

  public get firstName () {
    return this.form.get('firstName');
  }
  public get middleName () {
    return this.form.get('middleName');
  }
  public get lastName () {
    return this.form.get('lastName');
  }
  public get nationality () {
    return this.form.get('nationality');
  }
  public get maritalStatus () {
    return this.form.get('maritalStatus');
  }
  public get primaryLanguage () {
    return this.form.get('primaryLanguage');
  }
  public get email () {
    return this.form.get('email');
  }
  public get age () {
    return this.form.get('age');
  }
  public get address () {
    return this.form.get('address');
  }
  public get phoneNumber () {
    return this.form.get('phoneNumber');
  }
  public get salary () {
    return this.form.get('salary');
  }
  public get dateJoined () {
    return this.form.get('dateJoined');
  }
  public get skills () {
    return this.form.get('skills');
  }
  public get weeklyHours () {
    return this.form.get('weeklyHours');
  }
  public get daysOff () {
    return this.form.get('daysOff');
  }
  public get jobTitle () {
    return this.form.get('jobTitle');
  }

}
