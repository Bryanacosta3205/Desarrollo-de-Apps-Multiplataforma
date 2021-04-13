import React from 'react';

import {Button, Image, StyleSheet,Text,View} from 'react-native';

const App = ()  => {
  
  return (
    <View style={styles.sectionContainer}>
      <Text style={{fontSize:20}} >TECNOLÓGICO NACIONAL DE MÉXICO</Text>
      <Image style={styles.imageContainer} source={require('./image/itcolima.png')} />
      <Text>INGENIERÍA EN INFORMÁTICA</Text>
      <Text>17460639</Text>
      <Text>BRYAN EDUARDO GUTIÉRREZ ACOSTA</Text>
      <Text>MARZO-JUNIO 2021</Text>

      <View style={styles.buttonContainer}><Button title="Entrar" /></View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    margin:30,
    alignItems:'center',
    
  },
  buttonContainer:{
    flex:1,
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  imageContainer:{
   
    width:120,
    height: 120
  }
 
});

export default App;
