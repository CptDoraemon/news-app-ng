import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export enum NewsCategory {
  'headline' = 'headline',
  'business' = 'business',
  'entertainment' = 'entertainment',
  'health' = 'health',
  'science' = 'science',
  'sports' = 'sports',
  'technology' = 'technology',
}

export interface NewsData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsDataResponse {
  data: {
    getNews: NewsData[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  private newsApi = 'https://www.xiaoxihome.com/api/news?query=';

  constructor(
    private http: HttpClient
  ) { }

  getNewsCategories(): NewsCategory[] {
    return Object.values(NewsCategory);
  }

  getNewsData(category): Observable<NewsDataResponse> {
    const QUERY = `
        {
            getNews(category: ${category}) {
                source,
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
                content
            }
        }
    `;

    return this.http.get<NewsDataResponse>(this.newsApi + encodeURIComponent(QUERY));
  }
}
