import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class CartService {

  constructor() { }
  cart:Recipe[]=[];
  addRecipe(recipe:Recipe){
    this.cart.push(recipe);
    return this.cart;
  }

  getTotalPrice(){
    let totalPrice=0.0;

    return totalPrice;
  }

}
