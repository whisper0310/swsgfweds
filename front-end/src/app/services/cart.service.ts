import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

import 'rxjs/add/observable/of';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class CartService {

  constructor() { }

  // addRecipe(recipe:Recipe){
  //   this.cart.push(recipe);
  //   return this.cart;
  // }

  private cartSource= new Subject<Recipe[]>();

  cart$ = this.cartSource.asObservable();

  cartData = [];
  getTotalPrice(){
    let totalPrice=0.0;

    return totalPrice;
  }

  addRecipe(recipe){
    this.cartData.push(recipe);
    console.log(this.cartData);
    this.sendCartData();
  }
  sendCartData(){
    this.cartSource.next(this.cartData);
  }
}
