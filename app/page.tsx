import Algolia from "@/components/products/algolia";
import ProductTags from "@/components/products/product-tags";
import Products from "@/components/products/products";
import { fetchProducts } from "@/server/actions/fetch-products";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export const revalidate = 60 * 60;

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Algolia />
        <ProductTags />
        <Products />
      </HydrationBoundary>
    </main>
  );
}
