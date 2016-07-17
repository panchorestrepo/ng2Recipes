import {Component} from '@angular/core';
import {Recipe} from '../shared/recipe'
import {RecipeService} from './recipe.service';
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'fjr-recipe-list',
  template: `
    <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
    <ul>
    <li *ngFor="let item of recipes">
      <div class="img">
        <img [src]="item.imageUrl" alt="Recipe" (click)="onSelect(item)">
      </div>
      <div class="text">{{item.name}}</div>  
    </li>
    </ul>
  `,
  providers : [RecipeService]


})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[];

  constructor(private recipesService : RecipeService, private router : Router ) {}

  ngOnInit() : any {
    this.recipes = this.recipesService.getAllRecipes();
  }
  onAddRecipe() {
    console.debug("Aqui:onAddRecipe");
  }
  onSelect(recipe: Recipe) {
    console.debug("Aqui onSelect:");
    console.debug(recipe.id);
    //console.debug("recipe id:"+this.recipesService.getRecipeIndex(recipe));
    this.router.navigate(['/recipes',recipe.id]);
  }
}

