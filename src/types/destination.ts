export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  longDescription?: string;
  highlights?: string[];
  duration?: string;
  rating?: number;
  reviews?: number;
  location?: string;
  bestTimeToVisit?: string;
  activities?: string[];
  included?: string[];
  gallery?: string[];
}
