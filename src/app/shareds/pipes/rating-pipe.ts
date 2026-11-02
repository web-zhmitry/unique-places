import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) return '';
    return value.toFixed(1);
  }
}
