import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatIconModule, ModalComponent, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginshow: boolean = false
  emailonlyshow: boolean = true
  loginModalOpen: boolean = false
  isMobile: boolean = false;


  toggleLoginFace() {
    this.loginshow = true;
    this.emailonlyshow = false;
  }

  loginModaltoggle(open: boolean) {
    this.loginModalOpen = open
  }
}
