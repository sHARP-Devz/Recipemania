import { Component,   Input } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})

export class RecipePageComponent {
 // DATA FOR THE RECIPES GOES HERE
 images: any[] = [
  { name: "Chicken", url: 'assets/Images/chicken.png' },
  { name: "Chicken Soup", url: 'assets/Images/chickensoup.png' },
  { name: "Sou", url: 'assets/Images/sou.png' },
  { name: "Coffee", url: 'assets/Images/coffee.png'},
  { name: "Ice Cream", url: 'assets/Images/icecream.png'},
  { name: "Garlic Shrimps", url: 'assets/Images/garlicshrimps.png'}
  ];

  // DATA FOR THE USER PROFILE GOES HERE
  userProfile: any[] = [{ name: "Bambam", url: 'assets/Images/profilepic.png' }];

  // PAGINATION LOGIC
  @Input() rating: number = 0;
  maxRating: number = 5;

  get filledStars(): number[] {
    const percentage = (this.rating / this.maxRating) * 100;
    const numberOfStars = Math.round((percentage / 100) * this.maxRating);
    return Array(numberOfStars).fill(0);
  }

  get emptyStars(): number[] {
    const numberOfStars = this.maxRating - this.filledStars.length;
    return Array(numberOfStars).fill(0);
  }
}
