import React, { Component } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList, ImageBackground} from 'react-native';

import { JADWAL, MASKAPAI, BANDARA } from '../database/db.js';

const Details = ({ route, navigation }) => {
  const data = route.params.text;
  const kedatanganId = BANDARA.find(item => item.bandara_nama === data.kedatangan).bandara_kode;
  const keberangkatanId = BANDARA.find(item => item.bandara_nama === data.keberangkatan).bandara_kode;
  const listAirplane = JADWAL.filter(item =>
    item.bandara_kode_keberangkatan === keberangkatanId &&
    item.bandara_kode_tujuan === kedatanganId &&
    item.jadwal_keberangkatan === data.tanggal);
  console.log(listAirplane);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor="#36a5b8"/>
      <ImageBackground source={require('../images/bg22.png')} resizeMode='cover' style={{width:393, height:713}}>

      <Text style={{textAlign:'center', fontSize:30, marginTop:35, color:'black', fontWeight:'bold'}}>HILING.ID</Text>
      <Text style={{textAlign:'center', fontSize:15, marginTop:20, color:'black', fontStyle:'italic', fontWeight:'bold'}}>Fly in Trust</Text>
      <Text style={styles.result}>Search Result</Text>



      <SafeAreaView style={styles.container}>

        <FlatList style={{marginTop:25}}

          data={listAirplane}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity style={styles.Details}>

                <View style={styles.airport}>
                  <Text style={styles.textResult}>Departure      :         </Text>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_keberangkatan).bandara_nama}
                  </Text>
                </View>

                <View style={styles.airport}>
                  <Text style={styles.textResult}>Destination   :         </Text>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_tujuan).bandara_nama}
                  </Text>
                </View>

                <View style={styles.time}>
                  <Text style={styles.textResult}>Date               :         </Text>
                  <Text style={styles.text}>
                    {item.jadwal_keberangkatan}
                  </Text>
                </View>

                <View style={styles.time}>
                  <Text style={styles.textResult}>Airline            :         </Text>
                  <View style={styles.maskapai}>
                    <Text style={styles.text}>
                      {MASKAPAI.find(theItem => theItem.maskapai_id === item.maskapai_id).maskapai_nama}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.jadwal_id}
        >

        </FlatList>

        <Text style={styles.footer}>M. Fathurrachman S@119140041</Text>
      </SafeAreaView>


      </ImageBackground>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        color: '#36a5b8',
        fontWeight: 'bold',
        marginBottom:50,
    },

    result:{
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        marginTop: 50,
        fontWeight:'bold'
    },

    footer: {
        textAlign:'center',
        color:'grey',
        marginBottom:10
    },

    textResult: {
        fontWeight: 'bold',
        color: 'black',
        fontSize:20,
        marginBottom: 10
    },

  card: {
    marginHorizontal: 30,
  },
  Details: {
    backgroundColor: '#36a5b8',
    padding: 20,
    borderRadius: 10,
    borderColor:'#A9A9A9',
    borderWidth:3,
    marginBottom: 20,
    elevation: 10,
  },
  airport: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maskapai: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconPlane: {
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});


export default Details;