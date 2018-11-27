import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  reactiveForm: FormGroup;
  isSubmited = false;

  defaultData: Object = {
    fullName: {
      firstName: '',
      lastName: '',
    },
    email: '',
  };

  constructor() {
    this.reactiveForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('', Validators.required),
      }),
      passwordCheck: new FormGroup({
        password: new FormControl('', Validators.required),
        confirm: new FormControl(''),
      }),
      username: new FormControl('', Validators.required, this.userExist),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ]),
    });

    // this.reactiveForm.setValue(this.defaultData);
    this.reactiveForm
      .get('passwordCheck.confirm')
      .setValidators([Validators.required, this.validatePassword.bind(this)]);

    this.reactiveForm.controls['username'].valueChanges.subscribe(data => console.log(data));
    this.reactiveForm.controls['username'].statusChanges.subscribe(data => console.log(data));
  }

  onSubmit() {
    this.isSubmited = true;
    // this.reactiveForm.reset();
    console.log(this.reactiveForm);
  }

  validatePassword(control: FormControl): { [s: string]: boolean } {
    if (control.value !== this.reactiveForm.get('passwordCheck.password').value) {
      return { passworderror: true };
    }

    return null;
  }

  userExist(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'QuCh') {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
