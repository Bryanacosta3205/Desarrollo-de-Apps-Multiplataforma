import * as React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const HomeScreen = ({ navigation  }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        TECNOLÓGICO NACIONAL DE MÉXICO CAMPUS COLIMA
      </Text>
      <Image
        style={styles.imageContainer}
        source={require('./image/itcolima.png')}
      />
      <Text>INGENIERÍA EN INFORMÁTICA</Text>
      <Text>17460639</Text>
      <Text>BRYAN EDUARDO GUTIÉRREZ ACOSTA</Text>
      <Text>MARZO-JUNIO 2021</Text>

      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={()=>navigation.navigate('About')}  />
      </View>
    </View>
  );
};

const About = ()=>{
  return(
    <View style={styles.sectionContainer}>
      <Text>About</Text>
    </View>
  );
}

const App = ()=>{
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    margin: 30,
    width: 120,
    height: 120,
  },
});

export default App;
