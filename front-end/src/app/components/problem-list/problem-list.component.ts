import {Component, Inject, OnInit} from '@angular/core';
import { Restaurant} from '../../models/restaurant.model'
import {subscriptionLogsToBeFn} from "rxjs/testing/TestScheduler";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(@Inject("data") private data) { }

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants(){
    this.data.getRestaurants()
      .subscribe(data => this.restaurants = data);
  }
}
