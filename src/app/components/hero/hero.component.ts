import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  hero: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(
      params => (this.hero = this.heroesService.getHero(params['id']))
    );
  }
}
