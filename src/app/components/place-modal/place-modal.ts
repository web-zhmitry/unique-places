import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TooltipDirective } from '../../shareds/directives/tooltip';
import { PricePipe } from '../../shareds/pipes/price-pipe';
import { RatingPipe } from '../../shareds/pipes/rating-pipe';
import { CategoryPipe } from '../../shareds/pipes/category-pipe';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place-modal',
  imports: [TooltipDirective, PricePipe, RatingPipe, CategoryPipe],
  templateUrl: './place-modal.html',
  styleUrl: './place-modal.css',
})
export class PlaceModal {
  @Input() place!: Place;
  @Input() isFavorite: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() toggleFavorite = new EventEmitter<number>();

  onClose(): void {
    this.close.emit();
  }

  onFavoriteClick(): void {
    this.toggleFavorite.emit(this.place.id);
  }
}
