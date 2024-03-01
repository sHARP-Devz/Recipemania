import { Component,   Input } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})

export class RecipePageComponent {
 // DATA FOR THE RECIPES GOES HERE
 images: any[] = [
  { name: "Chicken", url: 'assets/images/chicken.png' },
  { name: "Chicken Soup", url: 'assets/images/chickensoup.png' },
  { name: "Sou", url: 'assets/images/sou.png' },
  { name: "Coffee", url: 'assets/images/coffee.png'},
  { name: "Ice Cream", url: 'assets/images/icecream.png'},
  { name: "Garlic Shrimps", url: 'assets/images/garlicshrimps.png'}
  ];

  // DATA FOR THE USER PROFILE GOES HERE
  userProfile: any[] = [{ name: "Bambam", url: 'assets/images/profilepic.png' }];

  // PAGINATION LOGIC
  @Input() rating: number = 4;
  maxRating: number = 5;
  
  
  categoriesShow: boolean = false;

  get filledStars(): number[] {
    const percentage = (this.rating / this.maxRating) * 100;
    const numberOfStars = Math.round((percentage / 100) * this.maxRating);
    return Array(numberOfStars).fill(0);
  }

  get emptyStars(): number[] {
    const numberOfStars = this.maxRating - this.filledStars.length;
    return Array(numberOfStars).fill(0);
  }

  toggleCategories(){
    this.categoriesShow = !this.categoriesShow
  }
}
