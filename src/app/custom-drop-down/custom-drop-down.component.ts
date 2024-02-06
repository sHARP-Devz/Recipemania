import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css'],
})
export class CustomDropDownComponent {
  dropdownOptions = [
    'Home',
    'Categories',
    'Recipes',
    'Blogs',
    'Contact Us',
    'Login/Register',
  ];

  isMobileView = false;

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize(): void {
    this.isMobileView = window.innerWidth < 768; // Adjust the breakpoint as needed
  }

  handleOptionSelected(option: string): void {
    console.log('Selected option:', option);
    // Add your custom logic here
  }
}
