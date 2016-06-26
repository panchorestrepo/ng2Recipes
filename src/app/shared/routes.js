"use strict";
var router_1 = require('@angular/router');
var recipes_component_1 = require('../recipe-book/recipes.component');
var shopping_list_component_1 = require('../shopping-list/shopping-list.component');
var app_component_1 = require('../app.component');
exports.routes = [
    { path: '/', component: app_component_1.AppComponent },
    { path: '/recipes', component: recipes_component_1.RecipesComponent },
    { path: '/shopping-list', component: shopping_list_component_1.ShoppingListComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.js.map