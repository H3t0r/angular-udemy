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

  constructor(private spotifyService: SpotifyService) {
    this.isLoading = true;
    this.spotifyService.getNewReleases().subscribe((albums: any) => {
      this.newReleases = albums;
      this.isLoading = false;
    });
  }

  ngOnInit() {}
}
