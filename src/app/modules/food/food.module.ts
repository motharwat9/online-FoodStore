import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './components/food-list/food-list.component';
import { SharedModule } from '../shared/shared.module';
import { FoodDetailsComponent } from './components/food-details/food-details.component';



@NgModule({
  declarations: [
    FoodListComponent,
    FoodDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FoodModule { }
