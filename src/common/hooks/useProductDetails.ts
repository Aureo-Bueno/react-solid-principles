import { Product } from "../types/product";
import { PRODUCTS_BASE_URL } from "../constants/endpoints";
import { useFetch } from "./useFetch";

interface UseProductDetailsReturn {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
}

export const useProductDetails = (
  id: string | undefined
): UseProductDetailsReturn => {
  const { data, isLoading: fetchLoading, error: fetchError } = useFetch<{
    products: Product[];
  }>(PRODUCTS_BASE_URL);

  if (!id) {
    return { product: null, isLoading: false, error: "ID do produto não fornecido." };
  }

  if (fetchLoading) {
    return { product: null, isLoading: true, error: fetchError };
  }

  if (fetchError) {
    return { product: null, isLoading: false, error: fetchError };
  }

  const foundProduct = data?.products.find(
    (product) => product.id.toString() === id
  ) ?? null;

  if (!foundProduct) {
    return { product: null, isLoading: false, error: "Produto não encontrado." };
  }

  return { product: foundProduct, isLoading: false, error: null };
};
