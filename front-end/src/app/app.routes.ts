import {Routes, RouterModule} from "@angular/router";
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "restaurants",
    pathMatch: "full"
  },
  {
    path: "restaurants",
    component: ProblemListComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: ProblemListComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: ProblemListComponent,
    pathMatch: "full"
  },
  {
    path: "restaurants/:_id",
    component: ProblemDetailComponent,
  },
  {
    path: "**",
    component: ProblemListComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
