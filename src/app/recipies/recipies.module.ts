import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipiesRoutingModule } from './recipies-routing.module';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { NewRecipieFormComponent } from './new-recipie-form/new-recipie-form.component';
import { RecipieCardsComponent } from './recipie-cards/recipie-cards.component';

@NgModule({
  declarations: [
    FoodDetailComponent,
    NewRecipieFormComponent,
    RecipieCardsComponent
  ],
  imports: [
    CommonModule,
    RecipiesRoutingModule,
    SharedModule
  ],
  entryComponents: [NewRecipieFormComponent]
})
export class RecipiesModule { }
