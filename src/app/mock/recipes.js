"use strict";
var recipe_1 = require("../shared/recipe");
var ingredient_1 = require("../shared/ingredient");
exports.RECIPES = [
    new recipe_1.Recipe('Wiener Schnitzel', 'A tasty Schnitzel', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
        new ingredient_1.Ingredient('Pork Meat', 1),
        new ingredient_1.Ingredient('French Fries', 1),
        new ingredient_1.Ingredient('Salad', 2),
    ]),
    new recipe_1.Recipe('Super Mega Burger', 'Tastes so delicious!', 'http://www.fraeuleinburger.de/tl_files/images/content/burger/Fraeulein-Burger.jpg', [
        new ingredient_1.Ingredient('Buns', 4),
        new ingredient_1.Ingredient('Salad', 1),
        new ingredient_1.Ingredient('Paddies', 4),
        new ingredient_1.Ingredient('Vegetabels', 2)
    ])
];
//# sourceMappingURL=recipes.js.map