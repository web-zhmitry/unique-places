import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  private categories: Record<string, string> = {
    hotel: 'Отель',
    restaurant: 'Ресторан',
    entertainment: 'Развлечения',
    nature: 'Природа',
    culture: 'Культура',
    architecture: 'Архитектура',
    spa: 'СПА и релакс',
  };

  transform(value: string): string {
    return this.categories[value] || value;
  }
}
