import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hllo, World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum <Text>dolor</Text>sit amet consectetur adipisicing elit. Deserunt excepturi in recusandae reiciendis delectus eaque consequatur qui debitis quo, sit illo alias harum, doloremque non aspernatur. Sequi temporibus reprehenderit vero?</Text>
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
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20,
  }
});


