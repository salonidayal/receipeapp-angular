import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chocolate Cake',
      'Cake made with cocoa powder',
      '../../assets/images/cake.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Sugar', 2),
        new Ingredient('Eggs', 4),
        new Ingredient('Butter', 1),
        new Ingredient('Chocolate', 12),
      ]),
    new Recipe('Pasta',
      'Probably made with flour',
      '../../assets/images/pasta.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Spaghetti', 1),
        new Ingredient('Sauce', 3),
      ]),
      new Recipe('Tomato Soup',
      'Its Liquid Food!',
      '../../assets/images/soup.jpg',
      [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Basil', 3),
        new Ingredient('Cream',2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
