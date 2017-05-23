import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) { }

  search (searchTerm: string) {
    let wikipediaUrl = 'https://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', searchTerm);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(wikipediaUrl, { search: params })
      .map(response => <string[]> response.json()[1]);
  }
}
