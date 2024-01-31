import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
    declarations: [
      LandingPageComponent
    ],
    imports: [
      MatIconModule,
      CommonModule
    ],

    exports: [
      LandingPageComponent
    ],
    providers: []
    
  })

  export class LayoutModule {}
