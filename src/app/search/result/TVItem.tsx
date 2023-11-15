import { tvGenres } from "@/clients/tmdb";
import { Card, CardContent, Chip, Stack } from "@mui/material";
import { GenreDivider } from "./components/GenreDivider";
import { HeaderWithVoting } from "./components/HeaderWithVoting";
import { TVItemType } from "./types";

export const TVItem = async ({
  name,
  genre_ids,
  first_air_date,
  vote_average,
  overview,
}: TVItemType) => {
  const { genres } = await tvGenres();
  const genreNames = genre_ids.map(
    (genreId) => (genres.find(({ id }) => id === genreId) || {}).name || ""
  );

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <HeaderWithVoting
        name={name}
        first_air_date={first_air_date}
        vote_average={vote_average}
      />
      <CardContent>{overview}</CardContent>

      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label="TV Show" variant="outlined" color="secondary" />
          <GenreDivider genreNames={genreNames} />
        </Stack>
      </CardContent>
    </Card>
  );
};
