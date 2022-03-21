import React, {Component} from 'react';
import {View,
    Text,
    StatusBar,
    ImageBackground,
    StyleSheet,
    TextInput,
    Button,
    RefreshControl,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
    Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const Separator = () => (
  <View style={styles.separator} />
);

const Home = ({navigation}) => {
   const [text, handleText] = React.useState({
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }

  return (
    <>
      <View style={{flex:1}}>
          <ImageBackground source={require('../images/bg.png')} resizeMode='cover' style={{width:393, height:713}}>
          <StatusBar barStyle='light-content' backgroundColor="#36a5b8"/>

          <Text style={styles.header}>HILING.ID</Text>
          <Text style={styles.header1}>Fly in Trust</Text>
          <View style={styles.viewForm}>

            <Text style={styles.variabelForm}>Date of Departure</Text>
            <TextInput placeholder='Masukan Tanggal Keberangkatan' style={styles.TextInput} onChangeText={getText('tanggal')} value={text.tanggal}/>

            <Text style={styles.variabelForm}>Departure Airport</Text>
            <TextInput placeholder='Masukan lokasi keberangkatan' style={styles.TextInput} onChangeText={getText('keberangkatan')} value={text.keberangkatan}/>

            <Text style={styles.variabelForm}>Destination Airport</Text>
            <TextInput placeholder='Masukan lokasi tujuan' style={styles.TextInput} onChangeText={getText('kedatangan')} value={text.kedatangan}/>

            <Button
                title="SEARCH"
                color='#36a5b8'
                onPress={() => navigation.navigate('Details', {text})}
            />
            <Separator />
        </View>

        <Text style={styles.footer}>M. Fathurrachman S@119140041</Text>

          </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 40,
        color: 'black',
        fontWeight: 'bold',
    },

    header1: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
        fontStyle:'italic',
    },

    footer: {
        textAlign:'center',
        marginTop:63,
        color: 'grey'
    },

    viewForm: {
        marginTop: 40,
        marginHorizontal: 40,
        backgroundColor:'#FFFFFF',
        padding:20,
        elevation: 3,
        borderRadius: 10,
        borderColor:'#A9A9A9',
        borderWidth:3,
    },

    variabelForm: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize:14
    },

    TextInput: {
        borderBottomWidth: 1,
        borderWidth:1,
        marginHorizontal:0,
        paddingHorizontal:10,
        borderColor:'#adadad',
        borderRadius:4,
        marginTop:0,
        color:'#666666',
        fontSize: 12,
        paddingVertical:5,
        marginBottom:35,
    },

    separator: {
        marginVertical: 8,
    },

    flatList: {
        marginBottom:10,
        backgroundColor:'#2196f3',
        marginHorizontal:20,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
});

export default Home;