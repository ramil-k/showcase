import { useCallback } from "react";
import { useLoad } from "./useLoad";
import { ArtworkData } from "../Interfaces";

export const useArtworksList = (page: number) =>
  useLoad(
    useCallback(
      () =>
        fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=12`)
          .then((res) => res.json())
          .then(({ data }) => data as ArtworkData[]),
      [page]
    ),
    []
  );
