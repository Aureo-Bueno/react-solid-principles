import { useEffect, useState } from "react";
import { Product } from "../types/product";
import axios from "axios";
import { PRODUCTS_BASE_URL } from "../constants/endpoints";

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(PRODUCTS_BASE_URL)
      .then((response) => {
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar produtos.");
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
};
