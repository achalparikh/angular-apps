import { Injectable } from '@angular/core';
import { FoodCard } from './recipies/models/FoodCard.interface';

@Injectable({
  providedIn: 'root'
})
export class FoodDataServiceService {
  public foodArray: FoodCard[] = [];

  constructor() {
    const item1: FoodCard = {
      name: 'Pancakes',
      desc: 'Rich Fluffy cake for making anyones mornning',
      imgLink: 'https://d3awvtnmmsvyot.cloudfront.net/api/file/6fTZjAw9Tjqf4XrddmRQ',
    };
    const item2: FoodCard = {
      name: 'Pizza',
      desc: 'Do we even need a description for somthing this amazing',
      imgLink: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/AN138-Pizza-732x549-Thumb.jpg?w=756&h=567',
    };
    const item3: FoodCard = {
      name: 'Burger',
      desc: 'You will feel gross after finishing the whole thing',
      imgLink: 'https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/11/gourmet-burger.jpg',
    };

    this.foodArray.push(item1);
    this.foodArray.push(item2);
    this.foodArray.push(item3);
  }

  public getFoodItems(): FoodCard[] {
    return this.foodArray;
  }

  public pushNewItems(item: FoodCard): FoodCard[] {
    this.foodArray.push(item);
    return this.foodArray;
  }

  public removeItems(name: string, desc: string) {
    const arr = this.foodArray.filter(x => x.name !== name && x.desc !== desc);
    this.foodArray = arr;
  }
}
