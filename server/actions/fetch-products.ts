"use server"
import { db } from "..";

export async function fetchProducts() {
  const products = await db.query.productVariants.findMany({
    with: {
      variantImages: true,
      variantTags: true,
      product: true,
    },
    orderBy: (productVariants, { desc }) => [desc(productVariants.id)],
  });
  if (!products) throw new Error("Products not found")
  return { success: products }
}