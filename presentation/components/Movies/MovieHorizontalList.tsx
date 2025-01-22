import { View, Text, FlatList } from "react-native";
import React from "react";
import { Movie } from "@/infrastucture/interface/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View>
      {title && <Text className="text-2xl font-bold ml-3 mb-3">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster
            className="px-2"
            id={item.id}
            poster={item.poster}
            smallPoster
          />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
