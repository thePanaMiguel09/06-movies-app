import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { UseMovies } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/Movie/MovieHeader";
import MovieDescription from "@/presentation/components/Movie/MovieDescription";
import MovieCredist from "@/presentation/components/Movie/MovieCredist";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, creditsQuery } = UseMovies(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator color={"blue"} size={50} />
        <Text className="text-xl font-bold">Loading</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data?.originalTitle ?? "No Original Title"}
        poster={movieQuery.data?.poster ?? ""}
        title={movieQuery.data?.title ?? "No Title"}
      />

      <MovieDescription movie={movieQuery.data}/>
      <MovieCredist cast={creditsQuery.data ?? []}/>
    </ScrollView>
  );
};

export default MovieScreen;
