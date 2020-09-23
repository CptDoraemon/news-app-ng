import { Injectable } from '@angular/core';

export enum NewsCategory {
  'headline' = 'headline',
  'business' = 'business',
  'entertainment' = 'entertainment',
  'health' = 'health',
  'science' = 'science',
  'sports' = 'sports',
  'technology' = 'technology',
}

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  constructor() { }

  getNewsCategories(): NewsCategory[] {
    return Object.values(NewsCategory);
  }

  getNewsData(category): void {

  }
}
