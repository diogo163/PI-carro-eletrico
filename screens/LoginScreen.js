import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth'


export default function LoginScreen() {


  const auth = getAuth();

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationMessage,setvalidationMessage] = useState('');
  
  async function login() {
    if (email === '' || password === '') {
      setvalidationMessage('Preencha os campos faltantes.')
      return;
    }

    try {
      await signInWithEmailAndPassword(auth,email, password);
      navigation.navigate('Home');
    } catch (error) {
     setvalidationMessage('E-mail ou senha inválidos.');
    }
  }


  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/undraw_Fingerprint_login_re_t71l-removebg-preview-removebg-preview.png')} 
          style={{width: 200, height: 200}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">RA</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="Digite seu email da Mauá"
              value = {email}
              onChangeText = {(text) => setEmail(text)}
            />
            <Text className="text-gray-700 ml-4">Senha</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
              secureTextEntry
              placeholder='Digite sua senha' 
              value={password}
              onChangeText = {(text) => setPassword(text)}
            />
            
            <Text className="mt-2 text-red-500" >{validationMessage}</Text>
            <TouchableOpacity onPress={login}  //onPress={()=> navigation.navigate('Home')}
              className="py-3 bg-yellow-400 rounded-xl">
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Login
                </Text>
             </TouchableOpacity>
            
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Não tem uma conta?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text className="font-semibold text-yellow-500"> Registrar-se</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </View>
    
  )
}