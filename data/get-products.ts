
import { fetchProducts } from "@/server/actions/fetch-products"
import { useQuery } from "@tanstack/react-query"

export function useGetPosts() {
  return useQuery({
    queryFn: async () => fetchProducts(),
    queryKey: ["products"],
  })
}