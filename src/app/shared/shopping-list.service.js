"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var shopping_list_1 = require("../mock/shopping-list");
var ShoppingListService = (function () {
    function ShoppingListService() {
    }
    ShoppingListService.prototype.getAllitems = function () {
        return shopping_list_1.SHOPPING_LIST;
    };
    ShoppingListService.prototype.getItem = function (index) {
        return shopping_list_1.SHOPPING_LIST[index];
    };
    ShoppingListService.prototype.getIndexOfItem = function (item) {
        return shopping_list_1.SHOPPING_LIST.indexOf(item);
    };
    ShoppingListService.prototype.insertItem = function (item) {
        shopping_list_1.SHOPPING_LIST.push(item);
    };
    ShoppingListService.prototype.insertItems = function (items) {
        Array.prototype.push.apply(shopping_list_1.SHOPPING_LIST, items);
    };
    ShoppingListService.prototype.deleteItem = function (item) {
        shopping_list_1.SHOPPING_LIST.splice(shopping_list_1.SHOPPING_LIST.indexOf(item), 1);
    };
    ShoppingListService.prototype.updateItem = function (index, item) {
        shopping_list_1.SHOPPING_LIST[index] = item;
    };
    ShoppingListService = __decorate([
        core_1.Injectable()
    ], ShoppingListService);
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map