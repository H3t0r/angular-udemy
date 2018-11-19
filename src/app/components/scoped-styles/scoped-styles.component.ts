import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoped-styles',
  template: `
    <p>The styles applied to this component will not afect others.</p>
  `,
  styles: [
    `
      p {
        color: teal;
      }
    `,
  ],
})
export class ScopedStylesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
