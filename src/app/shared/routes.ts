import { provideRouter, RouterConfig } from '@angular/router';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import { AppComponent} from '../app.component';
import {RecipeRoutes} from "../recipe-book/recipe.routes";
import {RecipesComponent} from "../recipe-book/recipes.component";

export const routes: RouterConfig = [
  { path: 'shopping-list', component: ShoppingListComponent},
  ...RecipeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
