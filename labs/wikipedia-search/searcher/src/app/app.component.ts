import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaService]
})
export class AppComponent {
  items: Array<string>;

  constructor(private wikipediaService: WikipediaService) { }

  search(term: string) {
    this.wikipediaService.search(term)
      .subscribe(items => this.items = items);
  }
}
