import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { FoodListComponent } from './modules/food/components/food-list/food-list.component';
import { FoodDetailsComponent } from './modules/food/components/food-details/food-details.component';
import { CartComponent } from './modules/cart/components/cart/cart.component';

const routes: Routes = [
  {path:'',component:FoodListComponent},
  {path:'search/:searchTerm',component:FoodListComponent},
  {path:'tags/:tags',component:FoodListComponent},
  {path:'food/:foodID',component:FoodDetailsComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
