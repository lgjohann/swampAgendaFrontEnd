import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack className="flex-1 justify-center items-center w-full">
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='edit/[id]' options={{ headerShown: false }} />
      <Stack.Screen name='createdata' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
