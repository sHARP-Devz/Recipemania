import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule
  ],
  exports: [
    RegisterComponent,
  ]
})
export class AuthModule { }
