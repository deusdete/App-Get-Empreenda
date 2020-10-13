import React, {useEffect, useState} from 'react';
import { StyleSheet, ActivityIndicator, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import api from '../services/api';

import profile from '../assets/profile.jpg'

export default function PouparScrenn() {
  const [saldo, setSaldo] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getSaldo() {
      setLoading(true)
      api.get('/bank/balance').then(res => {
        const { balance} = res.data
        console.log(balance)
        setSaldo(balance)
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
      <View style={styles.profile}>
        <Image style={styles.image} source={profile} />
        <Text style={styles.title}>Bem vindo(a) Ana</Text>
      </View>
      <Text style={styles.subTitle}>Seu saldo é de R$ {loading ? <ActivityIndicator color="#0000ff"/> : saldo.amount.$numberDecimal}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  profile:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 50
  }
});
