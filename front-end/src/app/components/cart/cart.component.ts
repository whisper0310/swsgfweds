import {Component, Injectable, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable()
export class CartComponent implements OnInit {

  constructor(private cart:CartService) {
    cart.cart$.subscribe(cart_data => this.cart_data=cart_data);
  }
  cart_data;
  ngOnInit() {

  }


}
