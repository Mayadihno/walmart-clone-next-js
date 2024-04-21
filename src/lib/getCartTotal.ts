import { Product } from "../../typings/productTypings";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce((a: number, b: Product) => {
    return a + b.price;
  }, 0);

  return `${
    products[0]?.currency ? products[0]?.currency : "$"
  } ${total.toFixed(2)}`;
}
