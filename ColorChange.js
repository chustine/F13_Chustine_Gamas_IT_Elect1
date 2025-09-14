import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const colors = ['white', 'lightblue', 'azure'];
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: colors[colorIndex] }]}>
      <View style={styles.button}>
        <Button title="White" onPress={() => setColorIndex(0)} />
      </View>
      <View style={styles.button}>
        <Button title="lightblue" onPress={() => setColorIndex(1)} />
      </View>
      <View style={styles.button}>
        <Button title="Azure" onPress={() => setColorIndex(2)} />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // take full screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: 150,
  },
});