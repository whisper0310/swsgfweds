import {Routes, RouterModule} from "@angular/router";
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "restaurants",
    pathMatch: "full"
  },
  {
    path: "restaurants",
    component: RestaurantListComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: "full"
  },
  {
    path: "restaurants/:_id",
    component: RestaurantDetailComponent,
  },
  {
    path: "**",
    component: RestaurantListComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
