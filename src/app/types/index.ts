export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  brand: string;
  rating: {
    rate: number;
    count: number;
  }
};


declare module 'react-shimmer-effects' {
  export interface ShimmerSimpleGalleryProps {
    card?: boolean;
    imageHeight?: number;
    caption?: boolean;
    imageType?: 'circular' | 'rectangular';
    items?: Array<{ url: string; title?: string }>;
    col?: number;
    row?: number;
  }

}
