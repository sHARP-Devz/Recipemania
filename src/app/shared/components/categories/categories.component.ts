import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  col1 =[
    { images: 'assets/icons/beef.svg', name: 'Beef' },
    { images: 'assets/icons/bread.svg', name: 'Bread' },
    { images: 'assets/icons/cakes.svg', name: 'Cakes' },
    { images: 'assets/icons/strength.svg', name: 'Healthy' },
    { images: 'assets/icons/blender.svg', name: 'Category1' }
  ]

  col2 = [
    { images: 'assets/icons/blender.svg', name: 'Category2' },
    { images: 'assets/icons/blender.svg', name: 'Category3' },
    { images: 'assets/icons/cake.svg', name: 'Category4' },
    { images: 'assets/icons/cake.svg', name: 'Category5' },
    { images: 'assets/icons/blender.svg', name: 'Category6' }
  ]

  col3 = [
    { images: 'assets/icons/chicken.svg', name: 'Category2' },
    { images: 'assets/icons/coffee-togo.svg', name: 'Category3' },
    { images: 'assets/icons/cookie.svg', name: 'Category4' },
    { images: 'assets/icons/cupcake.svg', name: 'Category5' },
    { images: 'assets/icons/drinks.svg', name: 'Category6' }
  ]

  col4 = [
    { images: 'assets/icons/blender.svg', name: 'Category2' },
    { images: 'assets/icons/fish.svg', name: 'Category3' },
    { images: 'assets/icons/strength.svg', name: 'Category4' },
    { images: 'assets/icons/ice-cream.svg', name: 'Category5' },
    { images: 'assets/icons/kids.svg', name: 'Category6' }
  ]

  col5 = [
    { images: 'assets/icons/cake.svg', name: 'Category2' },
    { images: 'assets/icons/pizza.svg', name: 'Category3' },
    { images: 'assets/icons/pork.svg', name: 'Category4' },
    { images: 'assets/icons/salad.svg', name: 'Category5' },
    { images: 'assets/icons/pork.svg', name: 'Category6' }
  ]

  col6 = [
    { images: 'assets/icons/blender.svg', name: 'Category2' },
    { images: 'assets/icons/pork.svg', name: 'Category3' },
    { images: 'assets/icons/snacks.svg', name: 'Category4' },
    { images: 'assets/icons/soup.svg', name: 'Category5' },
    { images: 'assets/icons/tea.svg', name: 'Category6' }
  ]

}
