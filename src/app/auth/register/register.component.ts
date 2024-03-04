import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = {
    firstName: '',
    email: '',
    password: '',
  }

  constructor(private service: AuthService) {}

  // service = Inject(AuthService)

  registerUser() {
    this.service.register(this.registerForm).subscribe((res: any) => {
      alert("Sign Up Successful")
      console.log(res)
    }, (err : any) => {
      alert('Something went wrong')
    })
  }

}
