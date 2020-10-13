import * as React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

const cursos = [
  {
    id: '1',
    nome: 'Como Expandir seu Negócio',
    duracao: '4 horas',
    prazo: '15 dias',
    imageURL: 'https://www.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/%5BPlanejamento%5D%20Curso-Como%20Expandir%20seu%20Nego%CC%81cio-Banner-700x300.png'
  },
  {
    id: '2',
    nome: 'Propriedade Intelectual para Startups',
    duracao: '2 horas',
    prazo: '15 dias',
    imageURL: 'https://www.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/%5BInova%C3%A7%C3%A3o%5D%20Curso-Propriedade%20Intelectual%20para%20Startups-Banner-700x300.png'
  },
  {
    id: '3',
    nome: 'Gestão de qualidade de bares e restaurantes',
    duracao: '2 horas',
    prazo: '30 dias',
    imageURL: 'https://www.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/%5BInova%C3%A7%C3%A3o%5D%20Curso-Propriedade%20Intelectual%20para%20Startups-Banner-700x300.png'
  }
]
export default function EstudarScrenn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudar</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.card}>
        <FlatList
          data={cursos}
          keyExtractor={item => String(item.id)}
          renderItem={({item})=>
            <View style={styles.cardConteinr}>
              <Image style={styles.image} source={{uri:item.imageURL}} />
            <Text style={styles.subTitle}>{item.nome}</Text>
            <View style={styles.row}>
              <Text style={styles.descricao}>Duração</Text>
              <Text style={styles.value}>{item.duracao}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.descricao}>Prazo</Text>
              <Text style={styles.descricao}>{item.prazo}</Text>
            </View>
            <RectButton style={styles.button}>
              <Text style={styles.textButton}>Continuar</Text>
            </RectButton>
          </View>
          }
        />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card:{
    width: '100%',
    
  },
  cardConteinr: {
    height: 280,
    marginHorizontal: 16,
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10
  },
  subTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
  },
  row: {
    backgroundColor: '#00000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descricao:{
    fontSize: 18
  },
  value: {
    fontSize: 18,
    color: '#009688'
  },
  button: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#ff0000",
    marginTop: 18
  },
  textButton: {
    fontSize: 12,
    fontWeight: "700",
    color: "#ffff",
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5
  }
});
