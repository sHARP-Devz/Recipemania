import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginshow: boolean = false
  emailonlyshow: boolean = true

  toggleLoginFace() {
    this.loginshow = true;
    this.emailonlyshow = false;
  }
}
