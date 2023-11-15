import { Divider, Stack, Typography } from "@mui/material";

export const GenreDivider = ({ genreNames }: { genreNames: string[] }) => {
  return (
    <Stack
      divider={<Divider orientation="vertical" />}
      direction="row"
      spacing={1}
      alignItems="center"
    >
      {genreNames.map((genreName) => (
        <Typography variant="body2" component="div" color="text.secondary">
          {genreName}
        </Typography>
      ))}
    </Stack>
  );
};
