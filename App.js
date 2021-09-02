import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import CarsList from './components/CarsList';
import CarItem from './components/CarItem';
import modelX from './assets/images/ModelX.jpeg';
import model3 from './assets/images/Model3.jpeg';
import modelS from './assets/images/ModelS.jpeg';
import modelY from './assets/images/ModelY.jpeg';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <CarsList />

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
