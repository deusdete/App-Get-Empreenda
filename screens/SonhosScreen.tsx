import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, RectButton, TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import api from '../services/api';

export default function SonhosScrenn() {
  const [sonhos, setSonhos] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getSaldo() {
      setLoading(true)
      api.get('/dreams').then(res => {
        const { dreams } = res.data
        console.log(dreams)
        setSonhos(dreams)
        setLoading(false)
      }).catch(err => {
        console.log(err)
        setLoading(false)
      })
    }
    getSaldo()
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FlatList
          data={sonhos}
          keyExtractor={item => String(item._id)}
          renderItem={({item})=>
            <View style={styles.cardConteinr}>
            <Text style={styles.subTitle}>{item.title}</Text>
            <View style={styles.row}>
              <Text style={styles.descricao}>Valor necessário:</Text>
              <Text style={styles.value}>R$ {item.value.$numberDecimal}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.descricao}>Prazo</Text>
              <Text style={styles.descricao}>{item.deadline}</Text>
            </View>
            <RectButton style={styles.button}>
              <Text style={styles.textButton}>Marca como concluida</Text>
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
    height: 160,
    marginHorizontal: 16,
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#efefef',
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
});
