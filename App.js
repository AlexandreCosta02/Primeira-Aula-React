import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.paulinho} source={require('./assets/paulinho.jpg')} />
      <Text style={styles.paragraph}>
        OLÁ MUNDÃO
      </Text>
      <Text style={styles.textdois}>
        A VIDA É DURA PRA QUEM TEM QUE FAZER O TCC
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    textTransform: "uppercase",
    color: '#0000ff',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
  textdois: {
    textTransform: "uppercase",
    color: '#00008b',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },

  paulinho:{
    height: 330,
    width: 330,
   
  },

});
