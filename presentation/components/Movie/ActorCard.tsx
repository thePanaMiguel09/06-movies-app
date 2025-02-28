import { Cast } from "@/infrastucture/interface/cast";
import { View, Image, Text } from "react-native";




interface Props {
    actor: Cast;
  }
  
  export const ActorCard = ({ actor }: Props) => {
    return (
      <View className="mx-10 w-[60px]">
        <Image
          source={{ uri: actor.avatar }}
          className="w-[100px] h-[150] rounded-2xl shadow"
          resizeMode="cover"
        />
  
        <View>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit
            className="font-bold text-lg"
          >
            {actor.name}
          </Text>
          <Text className="text-gray-600 text-xs">{actor.character}</Text>
        </View>
      </View>
    );
  };