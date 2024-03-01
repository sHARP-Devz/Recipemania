import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  users: any[] = [
    { name: "Bambam", url: 'assets/images/user-image.png' }
  ];

  icons: any[] = [
    { name: "Dashboard", url: 'assets/icons/dashboard-icon.svg' },
    { name: "My Profile", url: 'assets/icons/profile-icon.svg' },
    { name: "My Recipes", url: 'assets/icons/recipes-icon.svg' },
    { name: "Logout", url: 'assets/icons/logout-icon.svg' },
  ]
}
