import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TooltipDirective } from '../directives/tooltip';
import { PricePipe } from '../pipes/price-pipe';
import { RatingPipe } from '../pipes/rating-pipe';
import { CategoryPipe } from '../pipes/category-pipe';

@Component({
  selector: 'app-place-modal',
  imports: [TooltipDirective, PricePipe, RatingPipe, CategoryPipe],
  templateUrl: './place-modal.html',
  styleUrl: './place-modal.css',
})
export class PlaceModal {
  @Input() place: any;
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
