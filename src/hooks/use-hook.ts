import { useState, useCallback } from "react";
import toast from "react-hot-toast";

type AsyncFn<T> = () => Promise<T>;

export function useRequest<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const run = useCallback(async (fn: AsyncFn<T>, successMsg?: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fn();
      setData(result);

      if (successMsg) {
        toast.success(successMsg);
      }

      return result;
    } catch (err) {
      const e = err as Error;
      setError(e);

      toast.error(e.message || "Something went wrong");

      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    run,
    data,
    loading,
    error,
  };
}