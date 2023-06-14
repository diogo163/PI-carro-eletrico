import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'


export default function ProfileScreen() {

  const navigation = useNavigation();

  const [email, setEmail] = useState("22.01750-0@maua.br");
  const [placa, setPlaca] = useState("ABCDEFGH");
  const [password, setPassword] = useState("diogo123");


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#5588EC',
        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={'#000'}
          />
        </TouchableOpacity>

        <Text style={{color: '#fff' }}>Editar Usuário</Text>
      </View>

      <ScrollView>     
        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{color: '#fff', marginTop:35}}>E-mail</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                color = '#d3d3d5'
                value={email}
                onChangeText={(value) => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ color: '#fff' }}>Placa</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                color = '#d3d3d5'
                value={placa}
                onChangeText={(value) => setPlaca(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ color: '#fff' }}>Senha</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#ffbf00',
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: '#000',
            }}
          >
            Salvar Mudanças
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};