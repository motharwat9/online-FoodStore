import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { FoodCard } from 'src/app/models/food-card';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart=this.getCartFromLocalStorage()

  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food:FoodCard){
    let cartItem=this.cart.items.find(item=> item.food.id === food.id)
    if(cartItem)
    return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
    }
  removeItemFromCart(foodId:string){
    this.cart.items=this.cart.items.filter(item=> item.food.id != foodId);
    this.setCartToLocalStorage();
  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable()
  }

  private setCartToLocalStorage(){
    this.cart.totalPrice=this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price,0)
    this.cart.totalCount=this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity,0)
    console.log(this.cart.totalPrice)
    localStorage.setItem('Cart',JSON.stringify(this.cart))
    this.cartSubject.next(this.cart)
  }

  private getCartFromLocalStorage(){
    const cartJson=localStorage.getItem('Cart')                                                                     
    return cartJson? JSON.parse(cartJson) : new Cart()
  }
  changeQuantity(foodId:string,quantityValue:number){
    let item=this.cart.items.find(item=> item.food.id === foodId)
    console.log(item);
    if(!item)
    return;
    item.quantity=quantityValue
    console.log(item);
    item.price=item.quantity * item.food.price
    console.log(item);
      console.log(quantityValue);
    this.setCartToLocalStorage()
  }
}
