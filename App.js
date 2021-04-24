import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [name , setName] = useState('')
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>Hi I'm Minhaj Sadik And I'll Create a Ios Mobile App!</Text>
      <Text>Look I am Using Text Components To Show My Own Text</Text>
      <Image source={{
        uri: 'https://web.programming-hero.com/public/1607429045811.png',
      }}
        style={{ width: 200, height: 200 }}
      />
      <Image source={{
        uri: 'https://web.programming-hero.com/public/1607429045811.png'
      }}
        style={{ width: 200, height: 200 }}
      />

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => setName(text)}
        defaultValue="Hi Man?"
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
