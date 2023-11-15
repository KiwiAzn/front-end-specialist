import { Container } from "@mui/material";
import { Search } from "./search/Search";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Search />
    </Container>
  );
}
