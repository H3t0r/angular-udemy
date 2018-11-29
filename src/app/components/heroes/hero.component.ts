import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Hero } from './hero.interface';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    name: '',
    bio: '',
    house: 'marvel',
  };
  id: string;

  constructor(
    private heroesAPI: HeroesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params.id;

      if (this.id !== 'new') {
        this.heroesAPI.getHero(this.id).subscribe(hero => (this.hero = hero));
      }
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.id === 'new') {
      this.heroesAPI
        .newHero(this.hero)
        .subscribe(res => this.router.navigate(['/hero', res.name]), error => console.error(error));
    } else {
      this.heroesAPI
        .updateHero(this.hero, this.id)
        .subscribe(res => console.log(res), error => console.error(error));
    }
  }

  onNew(form: NgForm) {
    this.router.navigate(['/hero', 'new']);
    form.reset({
      house: 'marvel',
    });
  }
}
