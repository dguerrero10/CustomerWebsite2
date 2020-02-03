import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public _articles: Article[] = [
    new Article(
      'Showers and Faucets Tips',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Turn Off Water When Brushing Teeth or Shaving',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Install Aerators',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Shower Heads',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Saving Shower Water',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Take Showers Instead of Baths',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Turn Off Faucets',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Save Water with Leaking Faucets',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Update Household Faucets',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Replace Old Showerheads',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Prevent Leaky Faucets',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
    new Article(
      'Water Saving Faucets',
      'By showering for only 5 minutes per day with a water efficient shower head, you can save up to 12.5 gallons of water every session.'
    ),
  ];

  constructor() {}

  get articles() { return [...this._articles]; }
}
