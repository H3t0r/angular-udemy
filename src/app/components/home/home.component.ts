import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  isLoading: boolean;
  hasError: boolean;
  errorInfo: any;

  constructor(private spotifyService: SpotifyService) {
    this.hasError = false;
    this.isLoading = true;
    this.errorInfo = {
      title: '',
      message: '',
    };

    this.spotifyService.getNewReleases().subscribe(
      (albums: any) => {
        this.newReleases = albums;
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

  ngOnInit() {}
}
