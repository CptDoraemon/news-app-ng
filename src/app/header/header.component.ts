import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NewsCategory, NewsDataService} from '../services/news-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerTabs: NewsCategory[];
  public category: NewsCategory;

  constructor(
    private newsDataService: NewsDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter<RoutesRecognized>(event => event instanceof RoutesRecognized ))
      .subscribe(event => {
        this.category = event.state.root.firstChild.params.category;
      });

    this.headerTabs = this.newsDataService.getNewsCategories().slice();
  }
}
