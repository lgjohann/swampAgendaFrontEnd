import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  return (
    <View className={`w-full h-16 px-4 ${otherStyles}`}>
      <Text className="text-gray-50 font-extralight">{title}</Text>
      <View className="border-2 w-full h-16 px-4 border-[#121212] bg-primary rounded-2xl justify-center">
        <TextInput 
          className="text-white flex-1 text-base h-16 w-full"
          maxLength={55}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

export default FormField