import { Card, CardContent, CardHeader, Chip, Typography } from "@mui/material";
import { PeopleItemType } from "./types";

export const PeopleItem = async ({
  name,
  known_for_department,
  known_for,
}: PeopleItemType) => {
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
