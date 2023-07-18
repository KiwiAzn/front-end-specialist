interface Result {
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
}

interface SearchMultiData {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<Result>;
}

export const searchMulti = async (
  query: string,
  page: string = "1"
): Promise<SearchMultiData> => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH}`,
    },
  };
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json() as Promise<SearchMultiData>;
};
