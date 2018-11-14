import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
})
export class NoImagePipe implements PipeTransform {
  transform(images: any[]): any {
    let imageSrc = 'assets/img/noimage.png';

    if (images.length > 0) {
      imageSrc = images[0].url;
    }

    return imageSrc;
  }
}
