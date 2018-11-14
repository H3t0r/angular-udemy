import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  artist: any = {};
  tracks: any[] = [];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.isLoading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(tracks => {
      this.tracks = tracks;
      console.log(this.tracks);
    });
  }
}
