import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Recipe} from '../shared/recipe'
@Component({
  templateUrl : './recipe-detail.tpl.html'

})
export class RecipeDetailComponent implements  OnInit {
  recipe : Recipe;
  
  
  ngOnInit(): any {

  }

}

