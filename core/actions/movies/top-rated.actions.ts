import { movieAapi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastucture/interface/movie.db.response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieAapi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page: page
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieBDToMovie);

    return movies;
  } catch (error) {
    console.log("Cannot load top rated movies");
  }
};
