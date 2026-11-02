export interface Place {
  id: number;
  image: string;
  title: string;
  category: string;
  location: string;
  rating: number;
  priceCategory: number;
  tags: string[];
  description: string;
  expanded: boolean;
  badge: string | null;
}
