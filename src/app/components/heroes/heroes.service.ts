import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from './hero.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  URL = 'https://herocrud.firebaseio.com/heroes';

  constructor(private http: Http) {}

  newHero(hero: Hero) {
    const endpoint = `${this.URL}.json`;
    const body = JSON.stringify(hero);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http
      .post(endpoint, body, { headers })
      .pipe(map((res: any) => JSON.parse(res._body)));
  }

  updateHero(hero: Hero, id: string) {
    const endpoint = `${this.URL}/${id}.json`;
    const body = JSON.stringify(hero);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.put(endpoint, body, { headers }).pipe(map((res: any) => res));
  }

  getHero(key$: string) {
    const endpoint = `${this.URL}/${key$}.json`;

    return this.http.get(endpoint).pipe(map((res: any) => JSON.parse(res._body)));
  }

  deleteHero(key$: string) {
    const endpoint = `${this.URL}/${key$}.json`;

    return this.http.delete(endpoint).pipe(map((res: any) => JSON.parse(res._body)));
  }

  getHeroes() {
    const endpoint = `${this.URL}.json`;

    return this.http.get(endpoint).pipe(map((res: any) => JSON.parse(res._body)));
  }
}
