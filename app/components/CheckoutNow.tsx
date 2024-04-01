"use client";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutNow = ({
  currency,
  image,
  name,
  description,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(price_id: string) {
    checkoutSingleItem(price_id);
  }

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
        buyNow(product.price_id);
      }}>
      Add To Cart
    </Button>
  );
};

export default CheckoutNow;
