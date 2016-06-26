"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var recipes_1 = require("../mock/recipes");
var RecipeService = (function () {
    function RecipeService() {
    }
    RecipeService.prototype.getAllRecipes = function () {
        return recipes_1.RECIPES;
    };
    RecipeService.prototype.getRecipe = function (index) {
        return recipes_1.RECIPES[index];
    };
    RecipeService.prototype.getRecipeIndex = function (item) {
        recipes_1.RECIPES.indexOf(item);
    };
    RecipeService.prototype.insertRecipe = function (item) {
        recipes_1.RECIPES.push(item);
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        recipes_1.RECIPES.splice(index, 1);
    };
    RecipeService.prototype.updateRecipe = function (index, item) {
        recipes_1.RECIPES[index] = item;
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map