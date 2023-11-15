import { Box, CardHeader, CircularProgress, Typography } from "@mui/material";

type HeaderWithVotingType = {
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
};

export const HeaderWithVoting = ({
  title,
  name,
  release_date,
  first_air_date,
  vote_average,
}: HeaderWithVotingType) => {
  return (
    <CardHeader
      title={<Typography variant="h5">{title || name}</Typography>}
      subheader={
        <Typography variant="body2" color="text.secondary">
          {new Date(
            release_date || first_air_date || new Date()
          ).toLocaleDateString()}
        </Typography>
      }
      sx={{
        flexDirection: "row-reverse",
      }}
      avatar={
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={vote_average * 10}
            color="primary"
            thickness={4}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption" fontWeight={600} component="div">
              {vote_average.toFixed(1)}
            </Typography>
          </Box>
        </Box>
      }
    />
  );
};
