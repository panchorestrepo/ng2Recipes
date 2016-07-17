import {RouterConfig} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail.component";

export const RecipeRoutes : RouterConfig = [
  {
    path : 'recipes',
    component : RecipesComponent,
    children: [
      { path: '',    component: RecipeDetailComponent},
      { path: ':id', component: RecipeDetailComponent}
    ]
  }
]

