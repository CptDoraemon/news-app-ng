import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsCategory} from './services/news-data.service';
import {NewsCategoryPageComponent} from './news-category-page/news-category-page.component';

const routes: Routes = [
  { path: '', redirectTo: `news/${NewsCategory.headline}`, pathMatch: 'full' },
  { path: 'news/:category', component: NewsCategoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
