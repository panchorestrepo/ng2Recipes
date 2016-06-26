import {Component} from '@angular/core';
import {RecipeService} from './recipe.service';
import {RecipeListComponent} from './recipe-list.component';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'fjr-recipes',
  template: `
    <div class="master list">
      <fjr-recipe-list></fjr-recipe-list>
    </div>
    <div class="detail">
     Receipt Detail Paco
    </div>
  `,
  providers : [RecipeService],
  directives: [RecipeListComponent]

})
export class RecipesComponent {

}
