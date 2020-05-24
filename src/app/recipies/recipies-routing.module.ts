import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipieCardsComponent } from './recipie-cards/recipie-cards.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: Routes = [
  { path: '', component: RecipieCardsComponent },
  { path: 'food-detail/:item', component: FoodDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipiesRoutingModule { }
