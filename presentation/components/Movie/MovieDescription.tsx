import { View, Text } from "react-native";
import React from "react";
import { CompleteMovie } from "@/infrastucture/interface/movie.interface";
import { Formatter } from "@/config/helper/formater";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row mb-2">
        <Text>{movie.rating} - </Text>
        <Text>{movie.genres.join(", ")}</Text>
      </View>
      <Text className="font-bold text-xl mb-2">Description</Text>
      <Text className="mb-2 font-normal">{movie.description}</Text>
      <Text className="font-semibold text-1.5xl">{Formatter.currency(movie.budget)}</Text>
    </View>
  );
};

export default MovieDescription;
