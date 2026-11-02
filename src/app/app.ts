import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Catalog } from './components/catalog/catalog';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Catalog, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
