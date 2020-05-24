import { SharedModule } from './../shared/shared.module';
import { EmployeeDirectoryRoutingModule } from './employee-directory-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [EmployeeDashboardComponent, EmployeeInfoComponent],
  imports: [
    CommonModule,
    EmployeeDirectoryRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [EmployeeInfoComponent]
})
export class EmployeeDirectoryModule { }
