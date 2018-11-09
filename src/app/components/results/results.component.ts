import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  heroes: any[] = [];
  query: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this.heroes = this.heroesService.findHero(this.query);
      console.log(this.heroes);
    });
  }
}
