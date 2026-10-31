import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TooltipDirective } from '../directives/tooltip';
import { PricePipe } from '../pipes/price-pipe';
import { RatingPipe } from '../pipes/rating-pipe';
import { CategoryPipe } from '../pipes/category-pipe';

@Component({
  selector: 'app-place-card',
  imports: [TooltipDirective, PricePipe, RatingPipe, CategoryPipe],
  templateUrl: './place-card.html',
  styleUrl: './place-card.css',
})
export class PlaceCard {
  @Input() place: any;
  @Input() isFavorite: boolean = false;
  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() openDetails = new EventEmitter<any>();

  onFavoriteClick(): void {
    this.toggleFavorite.emit(this.place.id);
  }

  onDetailsClick(): void {
    this.openDetails.emit(this.place);
  }
}
