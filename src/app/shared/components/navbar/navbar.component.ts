import { Component, HostListener, Input } from '@angular/core';
import { ToggleService } from 'src/app/layouts/landing-page/toggle.service';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
<<<<<<< HEAD
export class NavbarComponent {}
=======
export class NavbarComponent {

  @Input() backgroundColor: string | undefined;
  @Input() textColor: string | undefined;
  @Input() displayDiv: string | undefined;

  // @Input() isLoggedIn: boolean = false; // Initially set to false to hide the navbar



  isMobile: boolean = false;
  toggle: boolean = false;


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

  showMenu() {
    if(this.isMobile) {
      this.toggleService.toggleMenu()
    }
  }

  
  loginModalOpen: boolean = false
  registerModalOpen: boolean = false


  loginModaltoggle(open: boolean) {
    this.loginModalOpen = open
  }
  registerModaltoggle(open: boolean) {
    this.registerModalOpen = open
  }

}
>>>>>>> 80dab6040d0d3411a7517129a319c16220fc9150
