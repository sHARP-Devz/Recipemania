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
    { images: 'assets/icons/beef.svg', name: 'Beef',
     images2: 'assets/icons/beef2.svg' },
    { images: 'assets/icons/bread.svg', name: 'Bread',
    images2: 'assets/icons/bread2.svg' },
    { images: 'assets/icons/cakes.svg', name: 'Cakes',
    images2: 'assets/icons/cakes2.svg' },
    { images: 'assets/icons/strength.svg', name: 'Healthy',
    images2: 'assets/icons/strength2.svg' },
    { images: 'assets/icons/blender.svg', name: 'Category1',
    images2: 'assets/icons/blender2.svg' }
  ];

 

  col2 = [
    { images: 'assets/icons/blender.svg', name: 'Category2',images2: 'assets/icons/blender2.svg' 
  },
    { images: 'assets/icons/blender.svg', name: 'Category3', images2: 'assets/icons/blender2.svg' },
    { images: 'assets/icons/cake.svg', name: 'Cake',images2: 'assets/icons/cake2.svg' },
    { images: 'assets/icons/cake.svg', name: 'Cake', images2: 'assets/icons/cake2.svg' },
    { images: 'assets/icons/blender.svg', name: 'Category6',images2: 'assets/icons/blender2.svg' }
  ]

  col3 = [
    { images: 'assets/icons/chicken.svg', name: 'Chicken', images2: 'assets/icons/beef2.svg' },
    { images: 'assets/icons/coffee-togo.svg', name: 'Coffee', images2: 'assets/icons/coffee-togo2.svg' },
    { images: 'assets/icons/cookie.svg', name: 'Cookie', images2: 'assets/icons/cookie2.svg' },
    { images: 'assets/icons/cupcake.svg', name: 'Cupcake', images2: 'assets/icons/cupcake2.svg' },
    { images: 'assets/icons/drinks.svg', name: 'Drink', images2: 'assets/icons/drinks2.svg' }
  ]

  col4 = [
    { images: 'assets/icons/blender.svg', name: 'Equipment', images2: 'assets/icons/blender2.svg' },
    { images: 'assets/icons/fish.svg', name: 'Fish', images2: 'assets/icons/fish2.svg' },
    { images: 'assets/icons/strength.svg', name: 'Strength', images2: 'assets/icons/strength2.svg' },
    { images: 'assets/icons/ice-cream.svg', name: 'Icecream', images2: 'assets/icons/ice-cream2.svg' },
    { images: 'assets/icons/kids.svg', name: 'Kids',
    images2: 'assets/icons/kids2.svg' }
  ]

  col5 = [
    { images: 'assets/icons/cake.svg', name: 'Cake', images2: 'assets/icons/cake2.svg' },
    { images: 'assets/icons/pizza.svg', name: 'Pizza', images2: 'assets/icons/pizza2.svg' },
    { images: 'assets/icons/pork.svg', name: 'Shrimp',
    images2: 'assets/icons/pork2.svg' },
    { images: 'assets/icons/salad.svg', name: 'Salad',
    images2: 'assets/icons/salad2.svg' },
    { images: 'assets/icons/pork.svg', name: 'Shrimp',
    images2: 'assets/icons/pork2.svg' }
  ]

  col6 = [
    { images: 'assets/icons/blender.svg', name: 'Equipment', images2: 'assets/icons/blender2.svg'},
    { images: 'assets/icons/pork.svg', name: 'Shrimp', images2: 'assets/icons/pork2.svg' },
    { images: 'assets/icons/snacks.svg', name: 'Snacks', images2: 'assets/icons/snacks2.svg' },
    { images: 'assets/icons/soup.svg', name: 'Soup',
    images2: 'assets/icons/soup2.svg' },
    { images: 'assets/icons/tea.svg', name: 'Tea',
    images2: 'assets/icons/tea2.svg' }
  ];

}
