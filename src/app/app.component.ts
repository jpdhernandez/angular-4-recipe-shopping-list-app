import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature: string;
  // showRecipes: boolean;
  // showShoppingList: boolean;
  
  // onClickRecipe(boolean) {
  //   this.showRecipes = boolean;
  // }

  // onClickShoppingList(boolean) {
  //   this.showShoppingList = boolean;
  // }

  onNavigate(feature:string) {
    this.feature = feature;
  }
}
