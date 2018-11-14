import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
})
export class NoImagePipe implements PipeTransform {
  transform(images: any[], size: string = 'big'): any {
    let imageSrc = 'assets/img/noimage.png';
    const imageSize = {
      big: 0,
      regular: 1,
      small: 2,
    };

    if (images.length > 0) {
      imageSrc = images[imageSize[size]].url;
    }

    return imageSrc;
  }
}
