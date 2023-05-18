import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function ChargerScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex">
      <View className="flex-row justify-start ml-4 mt-3">
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Image source={require('../assets/icons/logo_maua.png')} 
          style={{width: 25, height: 25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <Text className="font-semibold text-white mt-0.5 ml-1"> SMART CHARGE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Car')}>
            <Image source={require('../assets/icons/carro2.png')} 
            style={{width: 35, height: 35,marginLeft: 100, marginTop:-3}} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
            <Image source={require('../assets/icons/perfil1.png')} 
            style={{width: 28, height: 28,marginLeft: 30, marginTop:-3}} />
          </TouchableOpacity>
        </View>   

        
        <View className="flex-row justify-center">
                <Image source={require("../assets/images/carregador.jpg")}
                    style={{width: 300, height: 250, borderRadius:15, marginTop:55}} />
            </View>
            <Text className="font-semibold text-white mt-0.5 ml-12"> Localização: Bloco K            <Text className="font-semibold text-red-300 mt-0.5 ml-12"> Status: Ocupado</Text>
</Text>
            <TouchableOpacity
                    className="py-3 bg-yellow-400 mx-7 rounded-xl mt-12">
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Agendar
                        </Text>
                </TouchableOpacity>



      </SafeAreaView>
    </View>
    
  )
}