import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  dropdownOptions = [
    'Home',
    'Categories',
    'Recipes',
    'Blogs',
    'Contact Us',
    'Login/Register',
  ];

  isMobileView = false;

  handleOptionSelected(option: string): void {
    console.log('Selected option:', option);
    // Add your custom logic here
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobileView = window.innerWidth < 768;
  }
}
