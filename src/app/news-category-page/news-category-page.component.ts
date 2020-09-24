import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsData, NewsDataService} from '../services/news-data.service';

@Component({
  selector: 'app-news-category-page',
  templateUrl: './news-category-page.component.html',
  styleUrls: ['./news-category-page.component.less']
})
export class NewsCategoryPageComponent implements OnInit {

  public category: string;
  public isLoading = false;
  public errorMessage = '';
  public data: NewsData[];

  constructor(
    private route: ActivatedRoute,
    private newsDataService: NewsDataService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.category = param.get('category');
      this.getNewsData();
    });
  }

  getNewsData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.newsDataService.getNewsData(this.category.toUpperCase())
      .subscribe({
        next: data => {
          this.data = data.data.getNews.slice();
          this.isLoading = false;
          console.log(this.data)
        },
        error: err => this.errorMessage = 'server error',
      });
  }

}
