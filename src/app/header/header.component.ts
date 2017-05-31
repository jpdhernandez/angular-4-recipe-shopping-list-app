import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // @Output() showRecipes = new EventEmitter<boolean>();
  // @Output() showShoppingList = new EventEmitter<boolean>();
  @Output() feature = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  // onShowRecipes() {
  //   this.showShoppingList.emit(false);
  //   this.showRecipes.emit(true);
  // }  

  // onShowShoppingList() {
  //   this.showRecipes.emit(false);
  //   this.showShoppingList.emit(true);
  // }

  onFeatureClick(feature:string) {
    this.feature.emit(feature);
  }
}