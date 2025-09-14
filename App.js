import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import CounterApp from './CounterApp';

import ColorChange from './ColorChange';

export default function App() {
  return (
    <View style={styles.container}>
  
      <ColorChange/>
      <CounterApp/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // full screen
  },
});