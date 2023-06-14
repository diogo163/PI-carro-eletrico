import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex">
        <View className="flex-row justify-center mt-3">
        <TouchableOpacity>
          <Image source={require('../assets/icons/logo_maua.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 7, fontSize: 20 }}>
              SMART CHARGE
            </Text>
          </TouchableOpacity>
        </View>   
          
        <TouchableOpacity>
          <View className="flex-row justify-center mr-9 mt-6">
                <Image source={require("../assets/images/undraw_Completed_03xt-PhotoRoom.png-PhotoRoom.png")}
                    style={{width: 300, height: 300, borderRadius:15, marginTop:10}} />
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Charger')} style={{ marginHorizontal: 20, marginTop: 40 }}>
          <View className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">
              Agendar carregamento
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Car')} style={{ marginHorizontal: 20, marginTop: 40 }}>
          <View className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">
              Verificar estado de carregamento
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginHorizontal: 20, marginTop: 40 }}>
          <View className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">
              Editar Informações
            </Text>
          </View>
        </TouchableOpacity>
  



      </SafeAreaView>
    </View>    
  )
}