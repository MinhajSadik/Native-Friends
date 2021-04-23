import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi I'm Minhaj Sadik And I'll Create a Ios Mobile App!</Text>
      <Text>Look I am Using Text Components To Show My Own Text</Text>
      <Image source={{
        uri: 'https://web.programming-hero.com/public/1607429045811.png'
      }}
        style={{ width: 200, height: 200 }}
      />
      <Image source={{
        uri: 'https://web.programming-hero.com/public/1607429045811.png'
      }}
        style={{ width: 200, height: 200 }}
      />
      
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
});
