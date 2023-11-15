import { Context, useContext } from "react";
import { MovieResult, movieGenres } from "@/clients/tmdb";
import { Card, CardContent, Chip, Stack } from "@mui/material";
import { GenreDivider } from "./components/GenreDivider";
import { HeaderWithVoting } from "./components/HeaderWithVoting";
import { SearchResultContext } from "../page";

export const MovieItem = async () => {
  const { genre_ids, title, release_date, vote_average, overview } = useContext(
    SearchResultContext as Context<MovieResult>
  );

  const { genres } = await movieGenres();
  const genreNames = genre_ids.map(
    (genreId) => (genres.find(({ id }) => id === genreId) || {}).name || ""
  );

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <HeaderWithVoting
        title={title}
        release_date={release_date}
        vote_average={vote_average}
      />
      <CardContent>{overview}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label="Movie" variant="outlined" color="primary" />
          <GenreDivider genreNames={genreNames} />
        </Stack>
      </CardContent>
    </Card>
  );
};
