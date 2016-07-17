"use strict";
var router_1 = require('@angular/router');
var shopping_list_component_1 = require('../shopping-list/shopping-list.component');
var recipe_routes_1 = require("../recipe-book/recipe.routes");
exports.routes = [
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent }
].concat(recipe_routes_1.RecipeRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.js.map