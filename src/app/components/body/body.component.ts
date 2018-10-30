import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  phrase: any = {
    message: 'With great power comes great responsability.',
    author: 'Uncle Ben'
  };

  characters: string[] = ['Spiderman', 'Venom', 'Carnage'];

  isVisible = false;
}
