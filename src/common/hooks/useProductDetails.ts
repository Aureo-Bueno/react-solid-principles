import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/product";
import { PRODUCTS_BASE_URL } from "../constants/endpoints";

interface UseProductDetailsReturn {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
}

export const useProductDetails = (
  id: string | undefined
): UseProductDetailsReturn => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID do produto não fornecido.");
      setIsLoading(false);
      return;
    }

    axios
      .get(PRODUCTS_BASE_URL)
      .then((response) => {
        const foundProduct = response.data.products.find(
          (product: Product) => product.id.toString() === id
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Produto não encontrado.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar os detalhes do produto.");
        setIsLoading(false);
      });
  }, [id]);

  return { product, isLoading, error };
};
