import {
  View,
  Text,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Movie } from "@/infrastucture/interface/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout (() => { 
      isLoading.current = false
    }, 200)

  },[movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEnd =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEnd) return;
    isLoading.current = true;
    console.log("Cargar siguientes movies");
    loadNextPage && loadNextPage();
    isLoading.current = false;
  };

  return (
    <View>
      {title && <Text className="text-2xl font-bold ml-3 mb-3">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}- ${i}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster
            className="px-2"
            id={item.id}
            poster={item.poster}
            smallPoster
          />
        )}
        onScroll={(envent) => onScroll(envent)}
      />
    </View>
  );
};

export default MovieHorizontalList;
