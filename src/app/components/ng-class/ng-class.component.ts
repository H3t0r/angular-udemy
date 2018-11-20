import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [],
})
export class NgClassComponent {
  alertClass = 'alert-danger';
  asProperties: Object = {
    danger: false,
  };
  loading = false;

  constructor() {}

  executeAsync() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }
}
