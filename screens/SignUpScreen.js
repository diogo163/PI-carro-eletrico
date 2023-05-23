import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';

export default function SignUpScreen() {
    const navigation = useNavigation();

    const cars = ["A", "B", "C", "D","E"]


  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/undraw_Sign_up_n6im-removebg-preview.png')} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">RA</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"  
                placeholder='Digite seu RA'
            />
            <Text className="text-gray-700 ml-4">Placa do carro</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder='Digite a placa do seu carro'
            />
            <Text className="text-gray-700 ml-4">Senha</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                placeholder='Digite sua senha'
            />

            <SelectDropdown
                defaultButtonText = "Escolha o modelo"

                data={cars}
                onSelect={(selectedItem, index) => {
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    
                    return item
                }}
            />

            <TouchableOpacity
                className="py-3 bg-yellow-400 rounded-xl"
            >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Registre-se
                </Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Já tem uma conta?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
