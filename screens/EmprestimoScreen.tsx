import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export default function EmprestimoScrenn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quer um empréstimo?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Text style={styles.text}>Para você conseguir um empréstimo, primeiro você deve fazer uma solicitação a Getnet, e eles itão analisar o seu perfil de acordo com o seu selo e a saúde financeira do negócio, para melhorar seu selo faça cursos aqui no App, depois de realizar a solicitação de empréstmo no site getnet.com.br e aguardar você tem chance de conseguir um empréstimo.</Text>
        <RectButton
          onPress={() => console.log('kj')}
          style={styles.button}
        >

          <Text style={styles.textButton}>Solicitar empréstimo</Text>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
});
