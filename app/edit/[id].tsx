import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function EditScreen() {
  const { id } = useLocalSearchParams(); // Obtém o parâmetro 'id' da URL
  const router = useRouter();

  return (

    <SafeAreaView className="bg-background h-full">
      <Text className="text-white text-lg">Editar Trabalho</Text>
      <Text className="text-white text-lg">ID do Trabalho: {id}</Text>
    </SafeAreaView>

  );
}
