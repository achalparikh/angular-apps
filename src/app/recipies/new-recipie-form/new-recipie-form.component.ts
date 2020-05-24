import { FoodDataServiceService } from '../../food-data-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodCard } from '../models/FoodCard.interface';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-recipie-form',
  templateUrl: './new-recipie-form.component.html',
  styleUrls: ['./new-recipie-form.component.scss']
})
export class NewRecipieFormComponent implements OnInit {
  recipieForm: FormGroup;
  constructor(private fb: FormBuilder, private foodService: FoodDataServiceService, private snackBar: MatSnackBar) {
    this.recipieForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      imgLink: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  createNewRecipie() {
    const item: FoodCard = {
      name: this.name.value,
      desc: this.desc.value,
      imgLink: this.imgLink.value
    };

    this.foodService.pushNewItems(item);
    this.snackBar.open('New Recipie available', '', { duration: 2000});

  }

  public get name () {
    return this.recipieForm.get('name');
  }

  public get desc () {
    return this.recipieForm.get('desc');
  }

  public get imgLink () {
    return this.recipieForm.get('imgLink');
  }

}
