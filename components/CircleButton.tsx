import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const CircleButton = () => {
  return (
    <TouchableOpacity className="w-16 h-16 bg-accent flex-1 items-center justify-center rounded-full"
    onPress={() => router.navigate("/createdata")}
    >
        <Text className="text-6xl text-center text-white">+</Text>
    </TouchableOpacity>
  )
}

export default CircleButton
