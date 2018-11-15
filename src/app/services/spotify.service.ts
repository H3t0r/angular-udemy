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
        'Bearer BQB0QB3z8BBULWhkvQXAbYFVujDgfbmR0MIP-m-lPqZQ5SzoaQ5umepmeo1AQ7UyRHS0PmEong1VpbUl_oA',
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

  getArtist(id: string) {
    const endpoint = `artists/${id}`;

    return this.getQuery(endpoint);
  }

  getTopTracks(id: string) {
    const endpoint = `artists/${id}/top-tracks?country=MX`;

    return this.getQuery(endpoint).pipe(map(data => data['tracks']));
  }
}
