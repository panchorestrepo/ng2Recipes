import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../shared/recipe'
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "./recipe.service";

@Component({
  template : `<h1>Hola aqui en Detail Component</h1>
              <div class="info" *ngIf="recipe == null">
                <h1>Please choose or create a recipe</h1>
              </div>
              <div class="recipe" *ngIf="recipe != null">
                <h1>{{recipe.name}}</h1>
                <span><a (click)="onEdit()">Edit</a> | <a (click)="onDelete()" class="danger">Delete</a></span>
                <div class="img">
                  <img [src]="recipe.imageUrl">
                </div>
                <div class="content">
                  {{recipe.content}}
                </div>
                <div class="list">
                  <a (click)="onAddToShoppingList()" class="btn">Add all to shopping list</a>
                  <ul>
                    <li *ngFor="let item of recipe.ingredients">{{item.name}} ({{item.amount}})</li>
                  </ul>
                </div>
              
              </div>`

})
export class RecipeDetailComponent implements  OnInit, OnDestroy  {


  private sub: any;
  recipe : Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : RecipeService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      console.debug("id:"+id);
      this.recipe = this.service.getRecipe(id - 1);
    });
  }

/*
    ngOnInit() {
      // (+) converts string 'id' to a number
      let id = +this.route.snapshot.params['id'];
      console.debug("id:"+id);
      this.recipe = this.service.getRecipe(id);
    }
  */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

