import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCategoryPageComponent } from './news-category-page.component';
import {NewsDataService} from '../services/news-data.service';
import { NewsCardComponent } from './news-card/news-card.component';
import {NzButtonModule, NzCardModule, NzIconModule, NzSpinModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [NewsCategoryPageComponent, NewsCardComponent],
  exports: [
    NewsCategoryPageComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzSpinModule,
    NzIconModule,
    NzButtonModule,
  ],
  providers: [
    NewsDataService
  ]
})
export class NewsCategoryPageModule { }
