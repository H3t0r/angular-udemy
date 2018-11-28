import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from './hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    name: '',
    bio: '',
    house: '',
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.hero);
  }
}
