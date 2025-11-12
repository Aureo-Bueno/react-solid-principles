import { PRODUCTS_BASE_URL } from "../constants/endpoints";
import { Product } from "../types/product";
import { useFetch } from "./useFetch";

type UseFetchProductsReturn = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
};

export const useFetchProducts = (): UseFetchProductsReturn => {
  const { data, isLoading, error } = useFetch<{ products: Product[] }>(
    PRODUCTS_BASE_URL
  );

  return {
    products: data?.products ?? [],
    isLoading,
    error,
  };
};
