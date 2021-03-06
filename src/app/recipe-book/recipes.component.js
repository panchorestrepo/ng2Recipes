"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var recipe_service_1 = require('./recipe.service');
var recipe_list_component_1 = require('./recipe-list.component');
var router_1 = require('@angular/router');
var RecipesComponent = (function () {
    function RecipesComponent() {
    }
    RecipesComponent = __decorate([
        core_1.Component({
            selector: 'fjr-recipes',
            template: "\n    <div class=\"master list\">\n      <fjr-recipe-list></fjr-recipe-list>\n    </div>\n    <div class=\"detail\">\n     Receipt Detail Paco\n     <router-outlet></router-outlet>\n    </div>\n  ",
            providers: [recipe_service_1.RecipeService],
            directives: [router_1.ROUTER_DIRECTIVES, recipe_list_component_1.RecipeListComponent]
        })
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map