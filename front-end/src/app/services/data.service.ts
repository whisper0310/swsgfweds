import { Injectable } from '@angular/core';
import { Restaurant} from '../models/restaurant.model';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>('http://localhost:3000/api/v1/restaurants');
  }
  getRestaurant(id: String): Observable<Restaurant>{
    return this.http.get<Restaurant>(`http://localhost:3000/api/v1/restaurants/${id}`);
  }


  private handleError(error:any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.body || error);
  }

}

