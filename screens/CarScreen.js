import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import * as Battery from 'expo-battery';

export default function CarScreen() {
  const navigation = useNavigation();
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [batteryState, setBatteryState] = useState(null);
  const [countdown, setCountdown] = useState(0); // Estado para armazenar a contagem regressiva

  useEffect(() => {
    const getBatteryLevel = async () => {
      const level = await Battery.getBatteryLevelAsync();
      if (!isNaN(level)) {
        setBatteryLevel(level);
      }
    };

    const getBatteryState = async () => {
      const state = await Battery.getBatteryStateAsync();
      setBatteryState(state);
    };

    getBatteryLevel();
    getBatteryState();

    // Atualiza a contagem regressiva a cada segundo
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0); // Define o horário alvo para as 10:00
      const difference = Math.floor((target - now) / 1000); // Calcula a diferença em segundos
      setCountdown(difference >= 0 ? difference : 0); // Decrementa a diferença ou define como 0 se for negativa
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  const renderBatteryInfo = () => {
    if (batteryState === Battery.BatteryState.CHARGING) {
      return (
        <>
          <Text style={{ fontSize: 18, color: 'white' }}>Nível de Bateria: {batteryLevel ? `${(batteryLevel * 100).toFixed(0)}%` : 'Desconhecido'}</Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={{ fontSize: 16, color: 'white', fontStyle: 'italic' }}>O carro não está conectado ao carregador.</Text>
          <TouchableOpacity className="bg-yellow-400 mt-5"
  style={{ padding: 20, borderRadius: 8 }}
  onPress={() => navigation.navigate('Schedule')}
>
  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
    Agendar
  </Text>
</TouchableOpacity>

        </>
      );
    }
  };

  const formatCountdown = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 10, marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/icons/logo_maua.png')} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontWeight: 'bold', color: 'white', marginTop: 1, marginLeft: 5 }}>SMART CHARGE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 'auto', paddingRight: 50 }}>
            <Image source={require('../assets/icons/perfil1.png')} style={{ width: 28, height: 28, marginTop: -3 }} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Image source={require("../assets/images/JAC-E-JS1.jpg")} style={{ width: 300, height: 220, borderRadius: 15, marginTop: 55 }} />
          </View>
        </TouchableOpacity>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          {renderBatteryInfo()}
        </View>
      </SafeAreaView>
    </View>
  );
}
