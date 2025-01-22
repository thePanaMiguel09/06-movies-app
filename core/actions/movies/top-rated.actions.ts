import { movieAapi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastucture/interface/movie.db.response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mapper";

export const topRatedAction = async () => {
  try {
    const { data } = await movieAapi.get<MovieDBMoviesResponse>("/top_rated");

    const movies = data.results.map(MovieMapper.fromTheMovieBDToMovie);

    return movies;
  } catch (error) {
    console.log("Cannot load top rated movies");
  }
};
