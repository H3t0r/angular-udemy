import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
})
export class PasswordPipe implements PipeTransform {
  transform(value: any, isActive: boolean = true): any {
    if (!isActive) {
      return value;
    }
    return value.replace(/./g, '*');
  }
}
