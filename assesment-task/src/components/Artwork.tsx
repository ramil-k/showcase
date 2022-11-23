import { Link } from "react-router-dom";
import { useRating } from "../hooks/useRating";
import { Rating } from "./Rating";

type ImageProps = {
  imageClassName: string | undefined;
  imageId: string;
  alt: string;
  aspectRatio: string | undefined;
};

interface ArtworkProps {
  id: string;
  imageId: string;
  alt: string;
  thumbnail?: { width: number; height: number };
  artistTitle: string;
  className?: string;
  imageClassName?: string;
  hasLink?: boolean;
}

const Image = ({ imageClassName, imageId, alt, aspectRatio }: ImageProps) => (
  <img
    className={imageClassName}
    src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
    alt={alt}
    style={{ aspectRatio }}
  />
);

export const Artwork = ({
  id,
  alt,
  imageId,
  thumbnail,
  artistTitle,
  className,
  imageClassName,
  hasLink = false,
}: ArtworkProps) => {
  const [rating, setRating] = useRating(id);
  const aspectRatio = thumbnail && `${thumbnail.width} / ${thumbnail.height}`;
  const image = imageId ? (
    <Image
      imageClassName={imageClassName}
      imageId={imageId}
      alt={alt}
      aspectRatio={aspectRatio}
    />
  ) : (
    <div className={imageClassName}></div>
  );

  return (
    <div className={className}>
      {image}
      <h1>{hasLink ? <Link to={`/${id}`}>{alt}</Link> : alt}</h1>
      <div>by {artistTitle ?? "unknown artist"}</div>
      <Rating current={rating} onChange={setRating} />
    </div>
  );
};
