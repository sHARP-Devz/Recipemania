import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestingComponent } from './testing/testing.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    TestComponent,
    TestingComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
