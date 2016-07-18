import {Ingredient} from "../shared/ingredient";

export class Recipe {
  id : string;
  name: string;
  content: string;
  imageUrl : string;
  ingredients : Ingredient[];

  constructor(id: string, name: string, content: string, imageUrl: string, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
