import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-around my-4">
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/undraw_electric_car_b7hl-removebg-preview.png")}
                    style={{width: 300, height: 300}} />
            </View>
            <Text 
                className="text-white font-bold text-4xl text-center">
                SMART CHARGE
            </Text>
            <Text 
                className="text-white font-bold text-1xl text-center">
                O JEITO MAIS RÁPIDO E PRÁTICO DE CARREGAR O SEU CARRO ELÉTRICO
            </Text>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Registre-se
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Já tem uma conta?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-400"> LogIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}