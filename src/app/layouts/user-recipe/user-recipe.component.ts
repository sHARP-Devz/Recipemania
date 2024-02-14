import { Component } from '@angular/core';
import { userRecipe } from './userRecipe';

@Component({
  selector: 'app-user-recipe',
  templateUrl: './user-recipe.component.html',
  styleUrls: ['./user-recipe.component.css']
})
export class UserRecipeComponent {

  recipes = userRecipe;

}
