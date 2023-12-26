import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from '../../services/cart.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!:Cart;
  constructor(private _cs:CartService){}
  ngOnInit(): void {
    this._cs.getCartObservable().subscribe(res=>{
      this.cart=res
    })
    console.log(this.cart)

  }
  removeItem(item:CartItem){
    this._cs.removeItemFromCart(item.food.id)
  }
  changeQuantity(item:CartItem,quantity:string){
    const quantitynumber=parseInt(quantity)
    this._cs.changeQuantity(item.food.id,quantitynumber)
  }
}
