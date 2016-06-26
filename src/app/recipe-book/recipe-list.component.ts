import {Component} from '@angular/core';
import {Recipe} from '../shared/recipe'
import {RecipeService} from './recipe.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'fjr-recipe-list',
  template: `
    <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
    <ul>
    <li *ngFor="let item of recipes">
      <div class="img">
        <img [src]="item.imageUrl" alt="Recipe">
      </div>
      <div class="text">{{item.name}}</div>  
    </li>
    </ul>
  `


})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[];

  constructor(private _recipesService : RecipeService ) {}

  ngOnInit() : any {
    this.recipes = this._recipesService.getAllRecipes();
  }
  onAddRecipe() {
    
  }
}

