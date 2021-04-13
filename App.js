import React from 'react';

import {Button, StyleSheet,Text,View} from 'react-native';

const App = ()  => {
  
  return (
    <View style={styles.sectionContainer}>
      <Text>TECNOLÓGICO NACIONAL DE MÉXICO</Text>
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
    marginTop:30,
    alignItems:'center',
    
  },
  buttonContainer:{
    flex:1,
    justifyContent: 'flex-end',
    marginBottom: 30
    
  }
 
});

export default App;
