import { useEffect, useState } from "react";
import { Category } from "../types/category";
import axios from "axios";
import { CATEGORIES_BASE_URL } from "../constants/endpoints";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(CATEGORIES_BASE_URL)
      .then((response) => {
        setCategories(response.data.categories);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar categorias.");
        setIsLoading(false);
      });
  }, []);

  return { categories, isLoading, error };
};
