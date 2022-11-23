import { useLocalStorage } from "./useLocalStorage";

export const useRating = (id: string) => {
  const [ratings, setRatings] = useLocalStorage("ratings", {});

  const rating = ratings[id];
  const setRating = (value: number) => {
    setRatings({ ...ratings, [id]: value });
  };
  return [rating, setRating];
};
