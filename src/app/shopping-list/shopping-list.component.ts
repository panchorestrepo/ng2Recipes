import {Component} from '@angular/core';
import {ShoppingListEditComponent} from './shopping-list-edit.component';
import {ShoppingListService} from '../shared/shopping-list.service';
import {Ingredient} from '../shared/ingredient';
import {OnInit} from "@angular/core";

@Component({
  template: `
    <h1>Shopping List</h1>
    <fjr-shopping-list-edit [ingredient]="selectedItem"></fjr-shopping-list-edit>
    <div>Edit Section</div>
    <div class="list">
      <button class="btn" (click)="selectedItem = null">Add New Item</button>
      <ul>
        <li *ngFor="let item of shoppingList" (click)="onSelectItem(item)">{{item.name}} ({{item.amount}})</li>
      </ul>
    </div>
  `,
  directives: [ShoppingListEditComponent],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  shoppingList : Ingredient[];
  selectedItem : Ingredient = null;

  constructor(private _shoppingListService : ShoppingListService) {}

  ngOnInit() :any {
    this.shoppingList = this._shoppingListService.getAllitems();
  }
  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }
}

