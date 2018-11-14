import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(endpoint: string) {
    const url = `https://api.spotify.com/v1/${endpoint}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCh_lbsDMoF5KwMb7VoUkepgnQMN6uZs2OAiJt6emaCO1MZjHxOACL3bWEXB9yl0k0CDw0oF9Bzzm9h6Lc',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    const endpoint = 'browse/new-releases';

    return this.getQuery(endpoint).pipe(map(data => data['albums'].items));
  }

  searchByArtist(query: string) {
    const endpoint = `search?type=artist&q=${query}`;

    return this.getQuery(endpoint).pipe(map(data => data['artists'].items));
  }
}
