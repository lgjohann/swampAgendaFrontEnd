import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

const Cliente = ({id, name, horario, descricao}) => {


  return (
    <TouchableOpacity onPress={() => router.push(`/edit/${id}`)}>
        <View className="bg-primary p-3 rounded-xl w-[100%] h-[75px] mb-2 flex-col justify-between">
          <View className="flex-row justify-between">
              <Text className="text-white font-extrabold text-lg">{name}</Text>
              <Text className="text-white font-light">{horario}</Text>
          </View>
          <Text className="text-white font-extralight">{descricao}</Text>
        </View>
    </TouchableOpacity>
   
  )
}

export default Cliente