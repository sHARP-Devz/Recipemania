import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  col1 =[
    { images: 'assets/images/beef.svg', name: 'Beef' },
    { images: 'assets/images/bread.svg', name: 'Bread' },
    { images: 'assets/images/cakes.svg', name: 'Cakes' },
    { images: 'assets/images/strength.svg', name: 'Healthy' },
    { images: 'assets/images/blender.svg', name: 'Category1' }
  ]

  col2 = [
    { images: 'assets/images/blender.svg', name: 'Category2' },
    { images: 'assets/images/blender.svg', name: 'Category3' },
    { images: 'assets/images/cake.svg', name: 'Category4' },
    { images: 'assets/images/cake.svg', name: 'Category5' },
    { images: 'assets/images/blender.svg', name: 'Category6' }
  ]

  col3 = [
    { images: 'assets/images/chicken.svg', name: 'Category2' },
    { images: 'assets/images/coffee-togo.svg', name: 'Category3' },
    { images: 'assets/images/cookie.svg', name: 'Category4' },
    { images: 'assets/images/cupcake.svg', name: 'Category5' },
    { images: 'assets/images/drinks.svg', name: 'Category6' }
  ]

  col4 = [
    { images: 'assets/images/blender.svg', name: 'Category2' },
    { images: 'assets/images/fish.svg', name: 'Category3' },
    { images: 'assets/images/strength.svg', name: 'Category4' },
    { images: 'assets/images/ice-cream.svg', name: 'Category5' },
    { images: 'assets/images/kids.svg', name: 'Category6' }
  ]

  col5 = [
    { images: 'assets/images/cake.svg', name: 'Category2' },
    { images: 'assets/images/pizza.svg', name: 'Category3' },
    { images: 'assets/images/pork.svg', name: 'Category4' },
    { images: 'assets/images/salad.svg', name: 'Category5' },
    { images: 'assets/images/pork.svg', name: 'Category6' }
  ]

  col6 = [
    { images: 'assets/images/blender.svg', name: 'Category2' },
    { images: 'assets/images/pork.svg', name: 'Category3' },
    { images: 'assets/images/snacks.svg', name: 'Category4' },
    { images: 'assets/images/soup.svg', name: 'Category5' },
    { images: 'assets/images/tea.svg', name: 'Category6' }
  ]

}
