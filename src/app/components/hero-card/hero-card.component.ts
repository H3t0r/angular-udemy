import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;
  @Input() index: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHero() {
    this.router.navigate(['/hero', this.index]);
  }
}
