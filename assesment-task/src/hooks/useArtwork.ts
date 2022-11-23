import { useCallback } from "react";
import { useLoad } from "./useLoad";
import { ArtworkData } from "../Interfaces";

export const useArtwork = (id: string) =>
  useLoad(
    useCallback(
      () =>
        fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
          .then((res) => res.json())
          .then(({ data }) => data),
      [id]
    ),
    {} as ArtworkData
  );
