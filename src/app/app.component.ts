import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Hector';
  fullName = 'marGarIta aLHeli orTegA rOBles';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  x = 0.234;
  salary = 1234.5;
  hero = {
    name: 'Logan',
    codeName: 'Wolverine',
    specialPowers: ['regeneration', 'adamantium', 'retractible claws'],
    age: 500,
  };
  promise = new Promise((resolve, reject) => setTimeout(() => resolve('Here is your data'), 3500));
  date = new Date();
  video = 'ZpUYjpKg9KY';
  active = true;
  secret = 'mySecretPassword';
}
