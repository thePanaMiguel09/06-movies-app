import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/Movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/Movies/MovieHorizontalList";

const HomeScren = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingquery, popularQuery, topRatedQuery, upComingQuery } =
    useMovies();

  if (nowPlayingquery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }

  return (
    <ScrollView className="pb-20">
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="text-2xl font-bold ml-3 mb-3">Movies</Text>
        <MainSlideShow movies={nowPlayingquery.data ?? []} />
        <MovieHorizontalList
          title="Populars"
          movies={popularQuery.data ?? []}
        />
        <MovieHorizontalList
          title="Top Rated"
          movies={topRatedQuery.data?.pages.flat() as []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        <MovieHorizontalList
          title="Upcoming"
          movies={upComingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScren;
