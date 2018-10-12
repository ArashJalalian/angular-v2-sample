import {Recipe} from '../recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Omelette",
      "This is a simple complete dish",
      "http://www.naivecookcooks.com/wp-content/uploads/2016/08/easy-15mins-veggie-omelette-recipe-title.jpg",
      [
        new Ingredient('Tomato', 4),
        new Ingredient('Eggs', 5)
      ]),
    new Recipe(
      "Salad",
      "This is a simple healthy dish",
      "https://ifoodreal.com/wp-content/uploads/2017/06/lettuce-tomato-cucumber-salad-recipe-15.jpg",
      [
        new Ingredient('Celery', 1),
        new Ingredient('Tomato', 5)
      ])
  ];

  gerRecipes() {
    return this.recipes.slice();
  }


}
