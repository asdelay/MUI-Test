export interface CollageItem {
  img: string;
  title: string;
  rows?: number;
  cols?: number;
  author?: string;
}

export interface CityTours {
  id: number;
  name: string;
  tours: Tour[];
}

export interface Tour {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  description: string;
  image: string;
  collageData: CollageItem[];
}
