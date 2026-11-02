import { Component, signal, computed } from '@angular/core';
import { PlaceCard } from '../place-card/place-card';
import { PlaceModal } from '../place-modal/place-modal';
import { FavoritesService } from '../../shareds/services/favorites';
import { Place } from '../../models/place';

@Component({
  selector: 'app-catalog',
  imports: [PlaceCard, PlaceModal],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  constructor(public favoritesService: FavoritesService) {}

  places = signal<Place[]>([
    {
      id: 1,
      image: '/img/catalog/image-1.png',
      title: 'Aegean Hideaway',
      category: 'hotel',
      location: 'Имеровигли, Греция',
      rating: 5.0,
      priceCategory: 3,
      tags: ['Скала', 'Панорамный вид', 'Тихое место'],
      description:
        'Отель, высеченный прямо в скале над морем, где из каждого номера открывается панорамный вид на бескрайний горизонт. Пространство словно становится частью природного ландшафта, а мягкий свет и натуральные материалы создают ощущение полного покоя и уединения. Идеальное место для тех, кто хочет сбежать от суеты и раствориться в тишине Эгейского моря.',
      expanded: false,
      badge: '18+',
    },
    {
      id: 2,
      image: '/img/catalog/image-2.png',
      title: 'Aqua Vista',
      category: 'restaurant',
      location: 'Мале, Мальдивы',
      rating: 4.9,
      priceCategory: 2,
      tags: ['Под водой', 'Вид на рыб'],
      description:
        'Ресторан на глубине 5 метров под водой с панорамным видом на бескрайний океан и его обитателей. Огромные стеклянные стены создают ощущение полного погружения: вокруг проплывают тропические рыбы, а солнечные лучи проникают сквозь толщу воды, играя бликами на стенах. Ужин здесь — это не просто еда, а настоящее путешествие в подводный мир.',
      expanded: false,
      badge: null,
    },
    {
      id: 3,
      image: '/img/catalog/image-3.png',
      title: 'Mist Springs',
      category: 'spa',
      location: 'Хаконе, Япония',
      rating: 4.7,
      priceCategory: 2,
      tags: ['Лес', 'Горячие источники', 'Туман', 'Природные бассейны'],
      description:
        'Уединённый термальный комплекс среди горного леса, где природные бассейны растворяются в утреннем тумане. Природные горячие источники питаются водой из вулканических недр, а воздух наполнен запахом хвои и влажной земли. Здесь время замедляется, и каждый вдох становится глубоким и спокойным.',
      expanded: false,
      badge: '18+',
    },
    {
      id: 4,
      image: '/img/catalog/image-4.png',
      title: 'Skyline Cinema',
      category: 'entertainment',
      location: 'Дубай, ОАЭ',
      rating: 4.4,
      priceCategory: 1,
      tags: ['На крыше', 'Вид на город'],
      description:
        'Кинотеатр на крыше небоскрёба, где фильмы смотрят под открытым небом на фоне сияющей панорамы ночного города. Мягкие кресла, тёплые пледы и мерцающие огни Дубая создают атмосферу, в которой кино становится лишь частью впечатления. Это место, где город и искусство сливаются в одно.',
      expanded: false,
      badge: null,
    },
    {
      id: 5,
      image: '/img/catalog/image-5.png',
      title: 'Echoes of Stone',
      category: 'culture',
      location: 'Матера, Италия',
      rating: 4.9,
      priceCategory: 1,
      tags: ['Скала', 'Панорамный вид', 'Тихое место'],
      description:
        'Древние пещеры Матеры, превращённые в пространство для искусства и культуры. Каменные стены хранят эхо веков, а современные инсталляции вплетаются в древнюю архитектуру. Здесь прошлое и настоящее говорят на одном языке, а каждый зал — это новая глава истории.',
      expanded: false,
      badge: 'Только по записи',
    },
    {
      id: 6,
      image: '/img/catalog/image-6.png',
      title: 'Aurora Glass Lodge',
      category: 'hotel',
      location: 'Рованиеми, Финляндия',
      rating: 4.8,
      priceCategory: 2,
      tags: ['Стеклянная крыша', 'Северное сияние'],
      description:
        'Стеклянные домики посреди заснеженного леса, где северное сияние можно наблюдать прямо из кровати. Панорамные стены и прозрачная крыша открывают вид на звёздное небо и бескрайние снежные пейзажи, сохраняя внутри тепло и уют. Это место, где природа и комфорт встречаются на грани волшебства.',
      expanded: false,
      badge: null,
    },
  ]);
  selectedCategory = signal<string>('Все');
  filteredPlaces = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Все') {
      return this.places();
    }
    return this.places().filter((place) => place.category === category);
  });

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  selectedPlace = signal<Place | null>(null);

  openDetails(place: Place): void {
    this.selectedPlace.set(place);
  }

  closeDetails(): void {
    this.selectedPlace.set(null);
  }
}
