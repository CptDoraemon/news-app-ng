import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {RouterModule} from '@angular/router';
import {NewsDataService} from '../services/news-data.service';
import {NzMenuModule, NzTabsModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzTabsModule,
  ],
  providers: [
    NewsDataService
  ]
})
export class HeaderModule { }
