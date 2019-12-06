import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../Articles.service';
import { Article } from '../article';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  article:Article[];
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.article= this.articlesService.lesArticles;

  }

}
