import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a recipe', 'http://soupofsuccess.com/wp-content/uploads/2011/07/French-Cranberry-Chicken-Recipe.jpg'),
    new Recipe('A Test Recipe', 'This is a recipe', 'http://soupofsuccess.com/wp-content/uploads/2011/07/French-Cranberry-Chicken-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
