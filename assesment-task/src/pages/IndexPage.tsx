import { Artwork } from "../components/Artwork";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { useArtworksList } from "../hooks/useArtworksList";

export const IndexPage = ({}) => {
  const { data, error, isLoading, triggerReload } = useArtworksList(1);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error text={error} triggerReload={triggerReload} />;
  }

  const cards = data.map((props) => (
    <Artwork
      key={props.id}
      id={props.id}
      imageId={props.image_id}
      alt={props.title}
      thumbnail={props.thumbnail}
      artistTitle={props.artist_title}
      hasLink={true}
      className="card yellow-card yellow-card--focusable"
      imageClassName="card__image"
    />
  ));
  return <div className="card-list">{cards}</div>;
};
