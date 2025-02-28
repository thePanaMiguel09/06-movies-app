import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastucture/interface/cast'
import { ActorCard } from './ActorCard'

interface Props {
    cast: Cast[]
}

const MovieCredist = ({cast}: Props) => {
  return (
    <View>
      <Text className='mt-2 mb-2 px-5 text-2xl fontbold'>Actors</Text>
      <FlatList 
      data={cast}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator = {false}
      renderItem={({item}) => <ActorCard actor={item}/>}

      />
    </View>
  )
}

export default MovieCredist