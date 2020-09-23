import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCategoryPageComponent } from './news-category-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [NewsCategoryPageComponent],
  exports: [
    NewsCategoryPageComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class NewsCategoryPageModule { }
