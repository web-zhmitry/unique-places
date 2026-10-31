import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites = signal<number[]>(this.loadFavorites());

  private loadFavorites(): number[] {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  }

  toggleFavorite(id: number): void {
    const current = this.favorites();
    const updated = current.includes(id)
      ? current.filter((favId) => favId !== id)
      : [...current, id];
    this.favorites.set(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  }

  isFavorite(id: number): boolean {
    return this.favorites().includes(id);
  }

  count = () => this.favorites().length;
}
