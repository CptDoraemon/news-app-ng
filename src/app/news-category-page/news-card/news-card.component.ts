import {Component, Input, OnInit} from '@angular/core';
import {NewsData} from '../../services/news-data.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.less']
})
export class NewsCardComponent implements OnInit {

  @Input() public data: NewsData;

  constructor() { }

  ngOnInit(): void {
  }

}
