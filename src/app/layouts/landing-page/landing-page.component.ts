import { Component, OnInit, HostListener, Input } from '@angular/core';
import { recipe_data } from './recipe';
import { popular_recipe_data } from '../landing-page/pop_recipe';
import { author_data } from './authors';
import { ToggleService } from './toggle.service';
import { AuthService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  isMobile: boolean = false;
  toggle: boolean = false;

  // copied from james code for star rating
  @Input() rating: number = 2.5;
  maxRating: number = 4;
  // copied from james code for star rating

  constructor(private toggleService: ToggleService) {
  }

  ngOnInit(): void {
    this.toggleService.getIsMobile().subscribe(mobileView => {
      this.isMobile = mobileView;
    })

    this.toggleService.getToggle().subscribe(toggleHamburger => {
      this.toggle = toggleHamburger;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.toggleService.onResize()
  }


  // copied from james code for star rating
  get filledStars(): number[] {
    const percentage = (this.rating / this.maxRating) * 100;
    const numberOfStars = Math.round((percentage / 100) * this.maxRating);
    return Array(numberOfStars).fill(0);
  }

  get emptyStars(): number[] {
    const numberOfStars = this.maxRating - this.filledStars.length;
    return Array(numberOfStars).fill(0);
  }
  // copied from james code for star rating


  showMenu() {
    if(this.isMobile) {
      this.toggleService.toggleMenu()
    }
  }

  recipes = recipe_data;
  pop_recipe = popular_recipe_data;
  authors = author_data;
  
  categoriesShow: boolean = false;



  loginModalOpen: boolean = false
  registerModalOpen: boolean = false


  loginModaltoggle(open: boolean) {
    this.loginModalOpen = open
  }
  registerModaltoggle(open: boolean) {
    this.registerModalOpen = open
  }

  toggleCategories(){
    this.categoriesShow = !this.categoriesShow
  }



}
