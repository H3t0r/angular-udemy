import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [],
})
export class NgClassComponent implements OnInit {
  alertClass = 'alert-danger';
  asProperties: Object = {
    danger: false,
  };

  constructor() {}

  ngOnInit() {}
}
