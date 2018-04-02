import { Injectable } from '@angular/core';
import { Restaurant} from '../models/restaurant.model';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {Recipe} from '../models/recipe.model';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>('http://localhost:3000/api/v1/restaurants');
  }
  getRestaurant(id: String): Observable<Restaurant>{
    return this.http.get<Restaurant>(`http://localhost:3000/api/v1/restaurants/${id}`);
  }

  login(email,password): Observable<any>{
    var httpOptions;
    return this.http.post<any>(`http://localhost:3000/api/v1/auth/login`,{email:email, password: password},httpOptions)
  }

  register(email,password): Observable<any>{
    var httpOptions;
    return this.http.post<any>(`http://localhost:3000/api/v1/auth/register`,{email:email, password: password},httpOptions)
  }

  // getRecipes(id:String):Observable<Recipe[]>{
  //   return this.http.get<Recipe[]>(`http://localhost:3000/api/v1/recipes/${id}`);
  // }

  private handleError(error:any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.body || error);
  }

}

