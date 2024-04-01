export interface SimplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
  description: string;
}
