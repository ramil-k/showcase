import { useEffect, useState } from "react";

type UseLoadType<T> = {
  isLoading: boolean;
  data: T;
  error?: string;
  triggerReload?: () => void;
};

export const useLoad = <T, U>(
  loader: () => Promise<T>,
  defaultValue: U
): UseLoadType<T | U> => {
  const [reload, setReload] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | U>(defaultValue);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setIsLoading(true);
    loader().then(
      (data: T) => {
        setData(data);
        setIsLoading(false);
        setError(undefined);
      },
      () => {
        setData(defaultValue);
        setIsLoading(false);
        setError("Loading failed");
      }
    );
    return () => {};
  }, [loader, reload]);

  const triggerReload = () => setReload({});

  return {
    isLoading,
    data,
    error,
    triggerReload,
  };
};
