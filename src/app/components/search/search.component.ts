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

  constructor(private spotifyService: SpotifyService) {}

  searchByArtist(query: string) {
    this.isLoading = true;
    this.spotifyService.searchByArtist(query).subscribe((artists: any) => {
      this.artists = artists;
      this.isLoading = false;
    });
  }
}
