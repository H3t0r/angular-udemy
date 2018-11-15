import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  artists: any[] = [];
  isLoading: boolean;
  hasError: boolean;
  errorInfo: any;

  constructor(private spotifyService: SpotifyService) {
    this.hasError = false;
    this.errorInfo = {
      title: '',
      message: '',
    };
  }

  searchByArtist(query: string) {
    if (query.trim() === '') {
      this.artists = [];
      return;
    }

    this.isLoading = true;
    this.spotifyService.searchByArtist(query).subscribe(
      (artists: any) => {
        this.artists = artists;
        this.isLoading = false;
      },
      error => {
        this.hasError = true;
        this.isLoading = false;
        this.errorInfo.title = 'Spotify API';
        this.errorInfo.message = error.error.error.message;
      }
    );
  }
}
