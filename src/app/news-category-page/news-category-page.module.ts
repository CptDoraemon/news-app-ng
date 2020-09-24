import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCategoryPageComponent } from './news-category-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NewsDataService} from '../services/news-data.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [NewsCategoryPageComponent],
  exports: [
    NewsCategoryPageComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    NewsDataService
  ]
})
export class NewsCategoryPageModule { }
