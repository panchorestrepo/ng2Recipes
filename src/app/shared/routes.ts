import { provideRouter, RouterConfig } from '@angular/router';
import {RecipesComponent} from '../recipe-book/recipes.component';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import { AppComponent} from '../app.component';

export const routes: RouterConfig = [
  { path: '/', component: AppComponent},
  { path: '/recipes', component: RecipesComponent},
  { path: '/shopping-list', component: ShoppingListComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
