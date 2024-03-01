import { Component } from '@angular/core';

@Component({
  selector: 'app-footcat',
  templateUrl: './footcat.component.html',
  styleUrls: ['./footcat.component.css']
})
export class FootcatComponent {

  col1 =[
    { images: 'assets/images/cake.svg', name: 'Cake' },
    { images: 'assets/images/snacks.svg', name: 'Snacks' },
    { images: 'assets/images/cake.svg', name: 'Cake' },
  ]

  col2 = [
    { images: 'assets/images/pizza.svg', name: 'Pizza' },
    { images: 'assets/images/soup.svg', name: 'Soup' },
    { images: 'assets/images/pizza2.svg', name: 'Pizza' }
  ]

  col3 = [
    { images: 'assets/images/salad.svg', name: 'Salad' },
    { images: 'assets/images/fish.svg', name: 'Fish' },
    { images: 'assets/images/tea.svg', name: 'Tea' }
  ]

  col4 = [
    { images: 'assets/images/pizza2.svg', name: 'Chiken' },
    { images: 'assets/images/pork.svg', name: 'Shrimp' },
    { images: 'assets/images/soup.svg', name: 'Soup' },
  ]

  col5 = [
    { images: 'assets/images/bread.svg', name: 'Bread' },
    { images: 'assets/images/fish.svg', name: 'Fish' },
    { images: 'assets/images/cake.svg', name: 'Cake' },
  ]

  col6 =[
    { images: 'assets/images/cookie.svg', name: 'Cookies' },
    { images: 'assets/images/drinks.svg', name: 'Drink' },
    { images: 'assets/images/icecream2.svg', name: 'Ice cream' },
  ]

  col7 = [
    { images: 'assets/images/bread.svg', name: 'Bread' },
    { images: 'assets/images/cupcake.svg', name: 'Cupcake' },
    { images: 'assets/images/pizza2.svg', name: 'Pizza' }
  ]
}
