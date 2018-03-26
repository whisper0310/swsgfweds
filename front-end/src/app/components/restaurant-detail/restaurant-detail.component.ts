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

  onclick(id){
    var socket = io('http://localhost');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
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
