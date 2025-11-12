import axios from "axios";
import { useEffect, useState } from "react";

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export const useFetch = <T,>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url, { signal: controller.signal });
        setData(response.data);
      } catch (err: any) {
        if (axios.isCancel?.(err) || err.name === "CanceledError") return;
        setError(err?.message ?? "Erro ao buscar dados.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
