import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, TextInput, Alert, ActivityIndicator, AsyncStorage } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import api from '../services/api';

type User = {
  _id: string,
  cpf: string,
  name:string,
  email: string,
  createAt: Date,
  __v: number
}

export default function LoginScrenn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [erros, setErros] = useState('');
  const [loading, setLoading] = useState<boolean>(false)

  async function handleLogin(){
    console.log(email, password)
    setLoading(true)
    api.post('login', {email, password}).then((res: any) => {
      const { user, token} = res.data;
      api.defaults.headers.Authorization = `Bearer ${token}`
      _storeData(user)
      navigation.navigate('Root');
      setLoading(false)
    }).catch((err: any) => {
      console.log(err)
      setLoading(false)
      Alert.alert('Usuário não encontrado')
    })
  }

  async function _storeData(user: User){
    try {
      await AsyncStorage.setItem(
        '@User:key',
        user.name
      );
    } catch (error) {
      // Error saving data
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
        />
        <RectButton
          onPress={handleLogin}
          style={styles.button}
        >
          {loading ? <ActivityIndicator color="#fff"/> :
          <Text style={styles.textButton}>Fazer login</Text>}
        </RectButton>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => console.log("Clicou em esquecou a senha")}
            style={styles.buttonFooter}
          >
            <Text style={styles.sublime}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Clicou em termos do uso")}
            style={styles.buttonFooter}
          >
            <Text style={styles.sublime}>Termos de uso</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  form: {
    width: "100%",
  },
  input: {
    height: 56,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: "#ff0000",
  },
  textButton: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffff",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 20,
  },
  buttonFooter: {},
  sublime: {
    color: "#0000ff",
  },
});
