import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentBodyComponent } from './parent-body/parent-body.component';
import { ChildBodyComponent } from './child-body/child-body.component';

@NgModule({
  declarations: [ParentBodyComponent, ChildBodyComponent],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
