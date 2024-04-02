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
  price_id: string;
  name: string;
  slug: string;
  categoryName: string;
  description: string;
}

export interface SimplifiedEmployee {
  _id: string;
  name: string;
  slug: string;
  position: string;
  imageUrl: string;
  departmentName: string;
}
