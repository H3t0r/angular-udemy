import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  user: Object = {
    first: null,
    last: null,
    email: null,
    month: '',
    sex: '',
  };

  months = [
    { number: 1, string: 'January' },
    { number: 2, string: 'February' },
    { number: 3, string: 'March' },
    { number: 4, string: 'April' },
    { number: 5, string: 'May' },
    { number: 6, string: 'June' },
    { number: 7, string: 'July' },
    { number: 8, string: 'August' },
    { number: 9, string: 'September' },
    { number: 10, string: 'October' },
    { number: 11, string: 'November' },
    { number: 12, string: 'December' },
  ];

  constructor() {}

  ngOnInit() {
    $('.ui.radio.checkbox').checkbox();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.user);
  }
}
