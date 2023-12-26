import { CartService } from './../../../cart/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../service/food.service';
import { FoodCard } from 'src/app/models/food-card';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  foodId:number=0
  food:any;
  constructor(private ActivatedRoute:ActivatedRoute,private _fs:FoodService,private _cs:CartService,private router:Router){}
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params=>{
      if(params['foodID']){
        this.foodId=Number(params['foodID'])
      }
    })
    this.getfoodById()
  }
  getfoodById(){
    this._fs.getFoodById(this.foodId).subscribe(res=>{
      this.food=res
    })
  }
  addToCart(){
    this._cs.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
