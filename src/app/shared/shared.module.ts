import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatSnackBarModule,
    MatDialogModule, MatInputModule,
    MatFormFieldModule, MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const material = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    NgxSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
];

@NgModule({
  declarations: [LoaderComponent],
  imports: [material],
  exports: [material]
})
export class SharedModule { }
