import { Stack, Typography } from "@mui/material";

export const SearchResultItem = ({
  title = "",
  overview = "",
  media_type,
}: {
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
}) => {
  if (media_type !== "movie") {
    return <Typography>Search result is not a movie</Typography>;
  }

  return (
    <Stack>
      <Typography variant="h4">{title}</Typography>
      <Typography>{overview}</Typography>
    </Stack>
  );
};
