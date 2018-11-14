import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() items: any[];

  constructor(private router: Router) {}

  goToArtist(item: any) {
    const id = item.type === 'artist' ? item.id : item.artists[0].id;
    this.router.navigate(['/artist', id]);
  }
}
