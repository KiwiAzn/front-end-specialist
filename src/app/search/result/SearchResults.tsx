import { MovieItem } from "./MovieItem";
import { TVItem } from "./TVItem";
import { PeopleItem } from "./PeopleItem";
import { title } from "process";
import { MultiItemsType } from "./types";

export const SearchResults = async ({
  media_type,
  name,
  known_for_department,
  known_for,
  genre_ids,
  first_air_date,
  release_date,
  vote_average,
  overview,
}: MultiItemsType & { media_type: string }) => {
  switch (media_type) {
    case "movie":
      return (
        <MovieItem
          genre_ids={genre_ids}
          title={title}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
        />
      );

    case "tv":
      return (
        <TVItem
          name={name}
          genre_ids={genre_ids}
          first_air_date={first_air_date}
          vote_average={vote_average}
          overview={overview}
        />
      );

    case "person":
      return (
        <PeopleItem
          name={name}
          known_for_department={known_for_department}
          known_for={known_for}
        />
      );

    default:
      return <>media_type doesn't exist</>;
  }
};
