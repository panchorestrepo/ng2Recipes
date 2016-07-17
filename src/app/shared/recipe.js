"use strict";
var Recipe = (function () {
    function Recipe(id, name, content, imageUrl, ingredients) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.js.map