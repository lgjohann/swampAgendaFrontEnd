import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router'


const cancelar = () => {
    Alert.alert('Confrimar ação', 'Tens certeza que desejas cancelar?', [
        {
            text: 'Cancelar',
            onPress: () => console.log('Cancelou'),
        },
        {
            text: 'Confirmar',
            onPress: () => router.back(), 
        },
    ], {cancelable: true});
};

const createData = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('datetime');
  return (
    <SafeAreaView className="bg-background w-full h-[90vh] flex-1 items-center justify-center">
        <Text className="text-white text-4xl font-black">Novo Trabalho</Text>
        <FormField
            title="Nome do Cliente"
            placeholder="Digite aqui o nome do cliente..."        
        />
        <FormField
            otherStyles="mt-5"
            title="Descrição do Trabalho"
            placeholder="Breve descrição do trabalho a ser feito..."        
        />
        <View  className="mt-7">
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            />
        </View>
        <View className="flex-row items-center justify-evenly">
            <Button
                title='Cancelar'
                onPress={cancelar}
                color={'#FF0000'}
            />
            <Button
                title='Salvar'
                onPress={() => Alert.alert('Clicaste no botão!')}
            />
        </View>
    </SafeAreaView>
  )
}

export default createData