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
        'Bearer BQDRYZqDTSefGk3K4BrBwtJZD-W0bn3prwsuDEG-vZB7Xvcfu0lC0mBvsUhnbSW1PnfW865dFHukan3WHS4',
    });

    return this.http.get(url, { headers });
  }
}
