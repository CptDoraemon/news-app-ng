import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {NewsDataService} from '../services/news-data.service';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    MatToolbarModule
  ],
  providers: [
    NewsDataService
  ]
})
export class HeaderModule { }
