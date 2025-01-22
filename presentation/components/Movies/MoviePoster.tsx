import { Pressable, Image } from "react-native";
import { Movie } from "@/infrastucture/interface/movie.interface";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string
}

const MoviePoster = ({ poster, id, smallPoster, className }: Props) => {
  return (
    <Pressable className={`active:opacity-90 ${className}`}>
      <Image 
      source={{ uri: poster }} 
      className="rounded-xl w-full h-full"
      style={{
        width: smallPoster ? 85: 150,
        height: smallPoster ? 130: 250
      }}
      resizeMode="cover"
      />
      
    </Pressable>
  );
};

export default MoviePoster;
