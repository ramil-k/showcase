import { Link, useParams } from "react-router-dom";
import { Artwork } from "../components/Artwork";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { useArtwork } from "../hooks/useArtwork";

const BackLink = () => (
  <Link className={"artwork-page__backlink"} to="/">
    Back to the list
  </Link>
);

export const ArtworkPage = () => {
  const { id = "" } = useParams();

  const { data, error, isLoading, triggerReload } = useArtwork(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error text={error} triggerReload={triggerReload} />;
  }

  return (
    <div className="artwork-page">
      <BackLink />
      <Artwork
        id={data.id}
        imageId={data.image_id}
        alt={data.title}
        thumbnail={data.thumbnail}
        artistTitle={data.artist_title}
        className={"artwork-page__card"}
        imageClassName={"artwork-page__card__image"}
        hasLink={false}
      />
    </div>
  );
};
