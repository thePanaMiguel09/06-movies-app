import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular-actions";
import { topRatedAction } from "@/core/actions/movies/top-rated.actions";
import { upComingAction } from "@/core/actions/movies/upcoming.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingquery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });
  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });
  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: () => topRatedAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });
  const upComingQuery = useQuery({
    queryKey: ["movies", "upcomig"],
    queryFn: () => upComingAction(),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingquery,
    popularQuery,
    topRatedQuery,
    upComingQuery,
  };
};
