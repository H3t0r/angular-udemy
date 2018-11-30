import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: any;
  isLoading = true;

  constructor(private heroesAPI: HeroesService) {
    this.heroesAPI.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.isLoading = false;
    });
  }

  onDelete(id: string) {
    this.heroesAPI.deleteHero(id).subscribe(res => {
      if (res) {
        console.error(res);
      } else {
        delete this.heroes[id];
      }
    });
  }

  ngOnInit() {}
}
