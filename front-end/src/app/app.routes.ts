import {Routes, RouterModule} from "@angular/router";
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "problems",
    pathMatch: "full"
  },
  {
    path: "problems",
    component: ProblemListComponent,
    pathMatch: "full"
  },
  {
    path: "problems/:id",
    component: ProblemDetailComponent,
  },
  {
    path: "**",
    component: ProblemListComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
