"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RecipeListComponent = (function () {
    function RecipeListComponent(_recipesService) {
        this._recipesService = _recipesService;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this._recipesService.getAllRecipes();
    };
    RecipeListComponent.prototype.onAddRecipe = function () {
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'fjr-recipe-list',
            template: "\n    <button class=\"btn\" (click)=\"onAddRecipe()\">Add Recipe</button>\n    <ul>\n    <li *ngFor=\"let item of recipes\">\n      <div class=\"img\">\n        <img [src]=\"item.imageUrl\" alt=\"Recipe\">\n      </div>\n      <div class=\"text\">{{item.name}}</div>  \n    </li>\n    </ul>\n  "
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map