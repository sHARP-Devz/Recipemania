import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { RecipePageComponent } from './layout/recipe-page/recipe-page.component';

// const routes: Routes = [ 
//   { path: '', redirectTo: '/layout', pathMatch: 'full'},
//   // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
//   { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}
// ];
const routes: Routes = [ 
  { path: '', redirectTo: '/layout', pathMatch: 'full'},
  { path: 'layout', component: LayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: LandingPageComponent},
    {path: 'recipe', component: RecipePageComponent}
  ]},
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
