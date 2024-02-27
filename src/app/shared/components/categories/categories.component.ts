import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() backgroundColor: string | undefined;

  col1 = [
    { images: 'assets/icons/beef.svg', name: 'Beef' },
    { images: 'assets/icons/bread.svg', name: 'Bread' },
    { images: 'assets/icons/cakes.svg', name: 'Cakes' },
    { images: 'assets/icons/strength.svg', name: 'Healthy' },
    { images: 'assets/icons/blender.svg', name: 'Category1' }
  ]

  col2 = [
    { images: 'assets/icons/blender.svg', name: 'Category2' },
    { images: 'assets/icons/blender.svg', name: 'Category3' },
    { images: 'assets/icons/cake.svg', name: 'Cake' },
    { images: 'assets/icons/cake.svg', name: 'Cake' },
    { images: 'assets/icons/blender.svg', name: 'Category6' }
  ]

  col3 = [
    { images: 'assets/icons/chicken.svg', name: 'Chicken' },
    { images: 'assets/icons/coffee-togo.svg', name: 'Coffee' },
    { images: 'assets/icons/cookie.svg', name: 'Cookie' },
    { images: 'assets/icons/cupcake.svg', name: 'Cupcake' },
    { images: 'assets/icons/drinks.svg', name: 'Drink' }
  ]

  col4 = [
    { images: 'assets/icons/blender.svg', name: 'Category2' },
    { images: 'assets/icons/fish.svg', name: 'Fish' },
    { images: 'assets/icons/strength.svg', name: 'Strength' },
    { images: 'assets/icons/ice-cream.svg', name: 'Icecream' },
    { images: 'assets/icons/kids.svg', name: 'Kids' }
  ]

  col5 = [
    { images: 'assets/icons/cake.svg', name: 'Cake' },
    { images: 'assets/icons/pizza.svg', name: 'Pizza' },
    { images: 'assets/icons/pork.svg', name: 'Shrimp' },
    { images: 'assets/icons/salad.svg', name: 'Salad' },
    { images: 'assets/icons/pork.svg', name: 'Shrimp' }
  ]

  col6 = [
    { images: 'assets/icons/blender.svg', name: 'Category2' },
    { images: 'assets/icons/pork.svg', name: 'Shrimp' },
    { images: 'assets/icons/snacks.svg', name: 'Snacks' },
    { images: 'assets/icons/soup.svg', name: 'Soup' },
    { images: 'assets/icons/tea.svg', name: 'Tea' }
  ]

}
