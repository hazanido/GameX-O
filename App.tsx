import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity } from 'react-native';

export default function App() {
const [count,setCount]=useState(0);
const marked= () => setCount(prevCount => prevCount + 1)


  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require("./assets/backgroundX-O.jpg")} />
      <Text>Open up App.tsx to start working on your app!11111</Text>
      <StatusBar style="auto" />
      <View style={styles.bord}>
          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={marked}>
           <Text>Press Here</Text>
          </TouchableOpacity>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:400,
    height:400,
    borderRadius: 0
  },
  bord: {
    flex: 1,
    margin: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});
