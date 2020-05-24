import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {

  reviewForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<WriteReviewComponent>,
    ) {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      review: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(this.reviewForm.value);
  }

  public get name () {
    return this.reviewForm.get('name');
  }

  public get review () {
    return this.reviewForm.get('review');
  }

}
