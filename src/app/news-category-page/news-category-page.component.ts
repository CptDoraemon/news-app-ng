import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-category-page',
  templateUrl: './news-category-page.component.html',
  styleUrls: ['./news-category-page.component.scss']
})
export class NewsCategoryPageComponent implements OnInit {

  public category: string;
  public isLoading = true;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.category = param.get('category'));
  }

}
