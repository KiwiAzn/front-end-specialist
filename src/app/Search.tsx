"use client";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigateToSearchResultsPage = () => {
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <Stack direction="row" spacing={2} mt={8}>
      <TextField
        id="search"
        variant="outlined"
        placeholder="Search for movies, TV shows or people"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        inputProps={{
          autoComplete: "off",
        }}
        value={searchQuery}
        onChange={({ target: { value } }) => setSearchQuery(value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            navigateToSearchResultsPage();
          }
        }}
      />
      <Button variant="contained" onClick={navigateToSearchResultsPage}>
        Search
      </Button>
    </Stack>
  );
};
