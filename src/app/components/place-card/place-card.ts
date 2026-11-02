import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TooltipDirective } from '../../shareds/directives/tooltip';
import { PricePipe } from '../../shareds/pipes/price-pipe';
import { RatingPipe } from '../../shareds/pipes/rating-pipe';
import { CategoryPipe } from '../../shareds/pipes/category-pipe';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place-card',
  imports: [TooltipDirective, PricePipe, RatingPipe, CategoryPipe],
  templateUrl: './place-card.html',
  styleUrl: './place-card.css',
})
export class PlaceCard {
  @Input() place!: Place;
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
