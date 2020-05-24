import { EmployeeDataService } from './../employee-data.service';
import { Employee } from './../model/Employee.interface';
import { EmployeeInfoComponent } from './../employee-info/employee-info.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  public allEmployees: Employee[];
  constructor(private translate: TranslateService, private dialog: MatDialog, private dataService: EmployeeDataService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.allEmployees = this.dataService.getEmployees();
  }

  openForm() {
    const config = {
      disableClose: false,
      minWidth: '90vw',
      minHeight: '80vh'
    };
    const dialogRef = this.dialog.open(EmployeeInfoComponent, config);
  }

  translateLanguage(language: string) {
    this.translate.use(language);
  }

}
