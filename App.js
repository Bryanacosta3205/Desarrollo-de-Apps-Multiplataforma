import React from 'react';
import {Button, Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';


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

const DATA = [{
  id:1,title:"Primer elemento"
},{
  id:2,title:"Segundo elemento"
},{
  id:3,title:"Tercer elemento"
}];

const About = ({ navigation })=>{
  const ListItem = ({item}) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Details',{item})}  style={styles.itemContainer}>
      <Text style={styles.textItem}>{item.title}</Text>
    </TouchableOpacity >
  );
  return(
    <View style={styles.sectionContainer}>
      <Text>About</Text>
      <FlatList data={DATA}   renderItem={ListItem} />
      <Button title="Volver" onPress={()=>navigation.goBack()} />
      <Button title="Volver a Home" onPress={()=>navigation.navigate('Home')} />
      <Button title="Volver a About" onPress={()=>navigation.navigate('About')} />
      <Button title="Volver a About (forzado)" onPress={()=>navigation.push('About')} />
      <Button title="Volver al principio" onPress={()=>navigation.popToTop()} />
    </View>
  );
}

const Details = ({route})=>{
  const {item} = route.params;
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
}

const App = ()=>{
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Details" component={Details} />
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
  itemContainer: {
    margin:10,
    padding: 10,
    backgroundColor: "#2296F3",
    borderRadius: 5
  },
  textItem:{
      color: "#FFFFFF",
      textAlign: "center"
  }
});

export default App;
