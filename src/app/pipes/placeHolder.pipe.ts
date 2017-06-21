import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: string, textoDefault: string): string {
    if (value) return value
    else return textoDefault;
  }
}
