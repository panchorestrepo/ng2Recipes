import {Injectable} from '@angular/core';
import {RECIPES} from "../mock/recipes";
import {Recipe} from "../shared/recipe";

@Injectable()
export class RecipeService {
  getAllRecipes() {
    return RECIPES;
  }
  getRecipe(index: number) {
    return RECIPES[index];
  }
  getRecipeIndex(item: Recipe) {
    RECIPES.indexOf(item);

  }
  insertRecipe(item: Recipe) {
    RECIPES.push(item);
  }
  deleteRecipe(index: number) {
    RECIPES.splice(index,1);

  }
  updateRecipe(index: number, item: Recipe) {
    RECIPES[index] = item;

  }
}
