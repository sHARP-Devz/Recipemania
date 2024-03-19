import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-recipe',
  templateUrl: './first-recipe.component.html',
  styleUrls: ['./first-recipe.component.css'],
})
export class FirstRecipeComponent implements OnInit {
  images: string[] = [
    'assets/images/orange.jpg',
    'assets/images/harm.jpg',
    'assets/images/chicken2.png',
  ];

  currentImageIndex = 0;

  constructor() { }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }


  ngOnInit() {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);

  }

  recipe: any[] = [
    { name: "Chicken", url: 'assets/images/chicken.png' },
    { name: "Shrimps", url: 'assets/images/garlicshrimps.png' },
    { name: "Coffee", url: 'assets/images/coffee.png' },
  ];
  
    userProfile: any[] = [{ name: "Bad Bitches", url: 'assets/images/profilepic.png' }];
}
