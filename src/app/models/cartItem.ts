import { FoodCard } from "./food-card";

export class CartItem{
   constructor(public food:FoodCard){}
   quantity:number=1;
   price:number=this.food.price;
}