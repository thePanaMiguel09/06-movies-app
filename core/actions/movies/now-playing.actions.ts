import { movieAapi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastucture/interface/movie.db.response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieAapi.get<MovieDBMoviesResponse>("/now_playing");
    
    const movies = data.results.map(MovieMapper.fromTheMovieBDToMovie);

    return movies;
  } catch (error) {
    console.log("Cannot load now playing movies");
  }
};
