import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../services/favorites';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public favoritesService: FavoritesService) {}
}
