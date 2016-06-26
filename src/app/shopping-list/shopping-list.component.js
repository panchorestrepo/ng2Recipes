"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var shopping_list_edit_component_1 = require('./shopping-list-edit.component');
var shopping_list_service_1 = require('../shared/shopping-list.service');
var ShoppingListComponent = (function () {
    function ShoppingListComponent(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
        this.selectedItem = null;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.shoppingList = this._shoppingListService.getAllitems();
    };
    ShoppingListComponent.prototype.onSelectItem = function (item) {
        this.selectedItem = item;
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            template: "\n    <h1>Shopping List</h1>\n    <fjr-shopping-list-edit [ingredient]=\"selectedItem\"></fjr-shopping-list-edit>\n    <div>Edit Section</div>\n    <div class=\"list\">\n      <button class=\"btn\" (click)=\"selectedItem = null\">Add New Item</button>\n      <ul>\n        <li *ngFor=\"let item of shoppingList\" (click)=\"onSelectItem(item)\">{{item.name}} ({{item.amount}})</li>\n      </ul>\n    </div>\n  ",
            directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
            providers: [shopping_list_service_1.ShoppingListService]
        })
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map