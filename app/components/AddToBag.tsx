"use client";
import { urlFor } from "../lib/sanity";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  price_id: string;
  currency: string;
  image: any;
}

const AddToBag = ({
  currency,
  image,
  name,
  description,
  price,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}>
      Add To Cart
    </Button>
  );
};

export default AddToBag;
