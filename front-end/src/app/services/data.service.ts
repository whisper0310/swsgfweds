import { Injectable } from '@angular/core';
import { Problem} from '../models/problem.model';
import { PROBLEMS } from '../mock-problems';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getProblems(): Observable<Problem[]>{
    return this.http.get<Problem[]>('http://localhost:3000/api/v1/problems');
  }
  getProblem(id: number): Promise<Problem> {
    return this.http.get(`http://localhost:3000/api/v1/problems/${id}`)
      .toPromise()
      .then((res:Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.body || error);
  }

}

