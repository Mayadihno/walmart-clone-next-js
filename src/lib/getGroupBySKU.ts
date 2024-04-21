import { Product } from "../../typings/productTypings";

export function groupBySKU(products: Product[]): Record<string, Product[]> {
  return products?.reduce(
    (accum: Record<string, Product[]>, currrentProduct: Product) => {
      const sku = currrentProduct.meta.sku;
      if (!accum[sku]) {
        accum[sku] = [];
      }
      accum[sku].push(currrentProduct);
      return accum;
    },
    {}
  );
}
