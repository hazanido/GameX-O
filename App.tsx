import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require("./assets/backgroundX-O.jpg")} />
      <Text>Open up App.tsx to start working on your app!11111</Text>
      <StatusBar style="auto" />
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
  }
});
