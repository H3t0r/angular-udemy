import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const lowerCase = value.toLowerCase();
    const splitted = lowerCase.split(' ');
    const capitalized = splitted.map(w => {
      return w[0].toUpperCase() + w.substr(1);
    });

    return capitalized.join(' ');
  }
}
