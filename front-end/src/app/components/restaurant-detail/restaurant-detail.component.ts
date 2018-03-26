import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
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
