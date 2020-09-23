import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {NewsDataService} from '../services/news-data.service';



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ],
  providers: [
    NewsDataService
  ]
})
export class HeaderModule { }
