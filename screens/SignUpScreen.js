import { View, Text, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
// import config from "../config/config.json";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

export default function SignUpScreen() {
    const navigation = useNavigation();

    const auth = getAuth();
    const cars = ["A", "B", "C", "D","E"]

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [placa,setPlaca]=useState('')
    const [modelo,setModelo]=useState('')
    const [validationMessage, setValidationMessage] = useState('') 

    
    async function createAccount() {
        email === '' || password === '' 
        ? setValidationMessage('Preencha os campos faltantes.')
        : ''
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        //   navigation.navigate('Sign In');
        } catch (error) {
          setValidationMessage('Este e-mail já está em uso.');
        }
      }


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
                placeholder='Digite seu email da Mauá'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text className="text-gray-700 ml-4">Placa do carro</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder='Digite a placa do seu carro'
                value = {placa}
                onChangeText={text => setPlaca(text)}
            />
            <Text className="text-gray-700 ml-4">Senha</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                placeholder='Digite sua senha'
                value = {password}
                onChangeText={(text)=>setPassword(text)}
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
                onChangeText={(text)=>setModelo(selectedItem)}

            />

            <TouchableOpacity
                className="py-3 bg-yellow-400 rounded-xl"
                onPress={createAccount}
            >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Registre-se
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="mt-3 text-red-500">{validationMessage}</Text>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Já tem uma conta?</Text>
            <TouchableOpacity  onPress={()=> navigation.navigate('Login')}
            >
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
