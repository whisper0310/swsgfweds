import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import * as io from 'socket.io-client'

import { Restaurant } from '../../models/restaurant.model';
import { Recipe } from '../../models/recipe.model';
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  recipes: Recipe[];
  constructor(
    private route: ActivatedRoute,
    @Inject("data") private data
  ) {

  }

  add_to_cart(recipe){
    var socket = io('http://localhost');
    socket.emit('add', { recipe: recipe });
    socket.on('cart', function(data){
      console.log(data);
    })
    // socket.on('news', function (data) {
    //   console.log(data);
    //
    // });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data.getRestaurant(params['_id']).subscribe(
        data => {
          this.restaurant=data;
        }
      );
    });

    // this.route.params.subscribe(params => {
    //   this.restaurant = this.data.getRestaurant(params['id'])
  }

}
