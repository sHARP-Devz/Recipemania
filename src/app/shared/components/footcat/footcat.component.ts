import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({

  selector: 'app-footcat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footcat.component.html',
  styleUrls: ['./footcat.component.css']
})
export class FootcatComponent {

  col1 =[
    { images: 'assets/icons/cake.svg', name: 'Cake' },
    { images: 'assets/icons/snacks.svg', name: 'Snacks' },
    { images: 'assets/icons/cake.svg', name: 'Cake' },
  ]

  col2 = [
    { images: 'assets/icons/pizza.svg', name: 'Pizza' },
    { images: 'assets/icons/soup.svg', name: 'Soup' },
    { images: 'assets/icons/pizza.svg', name: 'Pizza' }
  ]

  col3 = [
    { images: 'assets/icons/salad.svg', name: 'Salad' },
    { images: 'assets/icons/fish.svg', name: 'Fish' },
    { images: 'assets/icons/tea.svg', name: 'Tea' }
  ]

  col4 = [
    { images: 'assets/icons/beef.svg', name: 'Chiken' },
    { images: 'assets/icons/pork.svg', name: 'Shrimp' },
    { images: 'assets/icons/soup.svg', name: 'Soup' },
  ]

  col5 = [
    { images: 'assets/icons/bread.svg', name: 'Bread' },
    { images: 'assets/icons/fish.svg', name: 'Fish' },
    { images: 'assets/icons/cake.svg', name: 'Cake' },
  ]

  col6 =[
    { images: 'assets/icons/cookie.svg', name: 'Cookies' },
    { images: 'assets/icons/drinks.svg', name: 'Drink' },
    { images: 'assets/icons/cupcake.svg', name: 'Ice cream' },
  ]

  col7 = [
    { images: 'assets/icons/bread.svg', name: 'Bread' },
    { images: 'assets/icons/cupcake.svg', name: 'Cupcake' },
    { images: 'assets/icons/pizza.svg', name: 'Pizza' }
  ]
}
