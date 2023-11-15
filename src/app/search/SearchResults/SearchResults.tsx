import { useContext } from "react";
import { MovieItem } from "./MovieItem";
import { TVItem } from "./TVItem";
import { PeopleItem } from "./PeopleItem";
import { SearchResultContext } from "../page";

export const SearchResults = async () => {
  const { media_type } = useContext(SearchResultContext);

  switch (media_type) {
    case "movie":
      return <MovieItem />;

    case "tv":
      return <TVItem />;

    case "person":
      return <PeopleItem />;

    default:
      return <>media_type doesn't exist</>;
  }
};
