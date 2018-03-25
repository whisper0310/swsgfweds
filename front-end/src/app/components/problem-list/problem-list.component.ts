import {Component, Inject, OnInit} from '@angular/core';
import {Problem} from '../../models/problem.model'
import {subscriptionLogsToBeFn} from "rxjs/testing/TestScheduler";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[] = [];
  constructor(@Inject("data") private data) { }

  ngOnInit() {
    this.getProblems();
  }
  getProblems(){
    this.data.getProblems()
      .subscribe(data => this.problems = data);
  }
}
