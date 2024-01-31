// import { Component } from '@angular/core';
// import { recipe_data } from './recipe';
// import { popular_recipe_data } from './pop_recipe';
// import { author_data } from './authors';

// @Component({
//   selector: 'app-landing-page',
//   templateUrl: './landing-page.component.html',
//   styleUrls: ['./landing-page.component.css']
// })
// export class LandingPageComponent {

//   recipes = recipe_data;
//   pop_recipe = popular_recipe_data;
//   authors = author_data;

//   changeMenu = false;

//   changeBackground() {
//     this.changeMenu = !this.changeMenu
//   }

//   toggle:boolean = false;

//   toggleNav () {
//     this.toggle = !this.toggle
//     console.log(this.toggle)
//   }

//   loginModalOpen: boolean = false
//   registerModalOpen: boolean = false


//   loginModaltoggle(open: boolean) {
//     this.loginModalOpen = open
//   }
//   registerModaltoggle(open: boolean) {
//     this.registerModalOpen = open
//   }


// }

import { Component, OnInit, HostListener } from '@angular/core';
import { recipe_data } from './recipe';
import { popular_recipe_data } from './pop_recipe';
import { author_data } from './authors';
import { ToggleService } from './toggle.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isMobile: boolean = false;
  toggle: boolean = false;

  constructor(private toggleService: ToggleService) {
  }

  ngOnInit(): void {
    this.toggleService.getIsMobile().subscribe(mobileView => {
      this.isMobile = mobileView;
      console.log(this.isMobile)
    })

    this.toggleService.getToggle().subscribe(toggleHamburger => {
      this.toggle = toggleHamburger;
      console.log(this.toggle)
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.toggleService.onResize()
  }

  showMenu() {
    if(this.isMobile) {
      this.toggleService.toggleMenu()
    }
  }

  recipes = recipe_data;
  pop_recipe = popular_recipe_data;
  authors = author_data;

  // toggle = false;

  // showMenu() {
  //   this.toggle = !this.toggle
  // }

  loginModalOpen: boolean = false
  registerModalOpen: boolean = false


  loginModaltoggle(open: boolean) {
    this.loginModalOpen = open
  }
  registerModaltoggle(open: boolean) {
    this.registerModalOpen = open
  }


  



}
