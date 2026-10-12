import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Catalog } from './catalog/catalog';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Catalog, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
