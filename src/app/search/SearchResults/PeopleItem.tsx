import { PersonResult } from "@/clients/tmdb";
import { Card, CardContent, CardHeader, Chip, Typography } from "@mui/material";
import { Context, useContext } from "react";
import { SearchResultContext } from "../page";

export const PeopleItem = async () => {
  const { name, known_for_department, known_for } = useContext(
    SearchResultContext as Context<PersonResult>
  );

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {known_for_department}
          </Typography>
        }
      />
      <CardContent>{known_for[0].overview}</CardContent>
      <CardContent>
        <Chip label="People" variant="outlined" color="success" />
      </CardContent>
    </Card>
  );
};
