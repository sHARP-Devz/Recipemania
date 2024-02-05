import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { TestingComponent } from './testing/testing.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [{ path: '', component: TestComponent, children: [
  {path: 'testing', component: TestingComponent},
  {path: 'second', component: SecondComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
