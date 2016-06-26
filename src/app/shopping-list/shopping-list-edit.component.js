"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ShoppingListEditComponent = (function () {
    function ShoppingListEditComponent(_shoppingListService) {
        this._shoppingListService = _shoppingListService;
    }
    ShoppingListEditComponent.prototype.onSubmit = function (item) {
        this.ingredient !== null ? this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item)
            : this._shoppingListService.insertItem(item);
    };
    ShoppingListEditComponent.prototype.onDelete = function () {
        this._shoppingListService.deleteItem(this.ingredient);
        this.ingredient = null;
    };
    ShoppingListEditComponent = __decorate([
        core_1.Component({
            selector: 'fjr-shopping-list-edit',
            template: "\n    <h1>{{ingredient === null ? 'Add' : 'Edit'}} Item</h1>\n    <form id=\"shopping-list-add\" (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n      <label for=\"item-name\">Name</label>\n      <input type=\"text\" id=\"item-name\" required [ngModel]=\"ingredient?.name\" ngControl=\"name\">\n      <label for=\"item-amount\">Amount</label>\n      <input type=\"text\" id=\"item-amount\" required [ngModel]=\"ingredient?.amount\" ngControl=\"amount\">\n      <button class=\"btn\" type=\"submit\">{{ingredient === null ? 'Add' : 'Edit'}}</button>\n      <button class=\"btn danger\" *ngIf=\"ingredient !== null\" (click)=\"onDelete()\">Delete</button>\n    </form>\n  ",
            inputs: ['ingredient'],
            styleUrls: ['css/shopping-list.css']
        })
    ], ShoppingListEditComponent);
    return ShoppingListEditComponent;
}());
exports.ShoppingListEditComponent = ShoppingListEditComponent;
//# sourceMappingURL=shopping-list-edit.component.js.map