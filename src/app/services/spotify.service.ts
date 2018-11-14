import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const url = 'https://api.spotify.com/v1/browse/new-releases';
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDsSYtMf-zogqytFlwVtJQJj7zTeuHjIm_4HvM5oQBUuaOFJUrW_IscaTC5ote8Ky7P-yNNTbDD7m87FDw',
    });

    return this.http.get(url, { headers });
  }

  searchByArtist(query: string) {
    const url = `https://api.spotify.com/v1/search?type=artist&q=${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDsSYtMf-zogqytFlwVtJQJj7zTeuHjIm_4HvM5oQBUuaOFJUrW_IscaTC5ote8Ky7P-yNNTbDD7m87FDw',
    });

    return this.http.get(url, { headers });
  }
}
