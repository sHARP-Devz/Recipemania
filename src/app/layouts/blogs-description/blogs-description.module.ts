import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBlockComponent } from '../../shared/components/title-block/title-block.component';
import { BlogsDescriptionComponent } from './blogs-description.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar/navbar.module';

@NgModule({
  declarations: [BlogsDescriptionComponent],
  imports: [CommonModule],
})
export class BlogsDescriptionModule {}

// TitleBlockComponent,
