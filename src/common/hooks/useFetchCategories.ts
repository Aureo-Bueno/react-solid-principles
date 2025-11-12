import { Category } from "../types/category";
import { CATEGORIES_BASE_URL } from "../constants/endpoints";
import { useFetch } from "./useFetch";

type UseFetchCategoriesReturn = {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
};

export const useFetchCategories = (): UseFetchCategoriesReturn => {
  const { data, isLoading, error } = useFetch<{ categories: Category[] }>(
    CATEGORIES_BASE_URL
  );

  return {
    categories: data?.categories ?? [],
    isLoading,
    error,
  };
};
