
export type Genre = {
    id: number;
    name: string;
  };
  
   export type FeaturedItem = {
    backdrop_path: any;
    genres: Genre[];
    id: number;
    original_name: string;
    first_air_date: Date | undefined;
    overview: string;
    number_of_seasons: number;
    vote_average: number;
  };
  
  export type Movie = {
    slug: string;
    title: string;
    items: MovieItems;
};


export type Result ={
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type MovieItems = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};
