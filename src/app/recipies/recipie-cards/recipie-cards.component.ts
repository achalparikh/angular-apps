import { FoodDataServiceService } from '../../food-data-service.service';
import { FoodCard } from '../models/FoodCard.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewRecipieFormComponent } from '../new-recipie-form/new-recipie-form.component';

@Component({
  selector: 'app-recipie-cards',
  templateUrl: './recipie-cards.component.html',
  styleUrls: ['./recipie-cards.component.scss']
})
export class RecipieCardsComponent implements OnInit {
  public foodArray: FoodCard[] = [];

  constructor(private foodService: FoodDataServiceService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.foodArray = this.foodService.getFoodItems();
  }

  openForm() {
    const config = {
      disableClose: true,
      minWidth: '80vh',
      minHeight: '80vh',
    };
    const dialogRef = this.dialog.open(NewRecipieFormComponent, config);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  removeRecipie(name: string, desc: string) {
    this.foodService.removeItems(name, desc);
    this.foodArray = this.foodService.getFoodItems();
  }

}
