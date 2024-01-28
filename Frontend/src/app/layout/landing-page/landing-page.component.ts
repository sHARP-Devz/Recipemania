import { Component } from '@angular/core';
import { recipe_data } from './recipe';
import { popular_recipe_data } from './pop_recipe';
import { author_data } from './authors';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  recipes = recipe_data;
  pop_recipe = popular_recipe_data;
  authors = author_data;

  changeMenu = false;

  changeBackground() {
    this.changeMenu = !this.changeMenu
  }

  loginModalOpen: boolean = false
  registerModalOpen: boolean = false


  loginModaltoggle(open: boolean) {
    this.loginModalOpen = open
  }
  registerModaltoggle(open: boolean) {
    this.registerModalOpen = open
  }


}
