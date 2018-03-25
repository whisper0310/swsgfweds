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
    console.log(123);
    return this.http.get<Restaurant>(`http://localhost:3000/api/v1/restaurants/${id}`);
  }

  // getRestaurant(id: number): Promise<Restaurant> {
  //   return this.http.get(`http://localhost:3000/api/v1/restaurants/${id}`)
  //     .toPromise()
  //     .then((res:Response) => res.json())
  //     .catch(this.handleError);
  // }

  private handleError(error:any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.body || error);
  }

}

