import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodCard } from '../models/FoodCard.interface';
import { FoodDataServiceService } from '../../food-data-service.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
  public food: string;
  public foodItem: FoodCard;
  constructor(private foodService: FoodDataServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.food = this.activatedRoute.snapshot.paramMap.get('item');
    this.foodItem = this.foodService.getFoodItems().find(x => x.name === this.food);
  }

}
