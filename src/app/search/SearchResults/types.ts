export type PeopleItemType = {
  name: string;
  known_for_department: string;
  known_for: [{ overview: string }];
};

export type TVItemType = {
  name: string;
  genre_ids: number[];
  first_air_date: string;
  vote_average: number;
  overview: string;
};

export type MovieItemType = {
  genre_ids: [number];
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
};

export type MultiItemsType = PeopleItemType & TVItemType & MovieItemType;
