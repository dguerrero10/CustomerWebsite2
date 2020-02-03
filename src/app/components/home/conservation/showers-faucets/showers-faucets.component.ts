import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../conservation-education-shared/article.service';
import {Article} from '../../conservation-education-shared/article.model';

@Component({
  selector: 'app-showers-faucets',
  templateUrl: './showers-faucets.component.html',
  styleUrls: ['./showers-faucets.component.scss']
})
export class ShowersFaucetsComponent implements OnInit {
  loadedArticles: Article[];
  imgUrl = '../../../../../assets/images/conservation-shower.jpg';

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.loadedArticles = this.articleService.articles;
  }

}
