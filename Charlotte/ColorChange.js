import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const colors = ['white', 'blue', 'yellow'];
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: colors[colorIndex] }]}>
      <View style={styles.button}>
        <Button title="White" onPress={() => setColorIndex(0)} />
      </View>
      <View style={styles.button}>
        <Button title="blue" onPress={() => setColorIndex(1)} />
      </View>
      <View style={styles.button}>
        <Button title="yellow" onPress={() => setColorIndex(2)} />
      </View>
      
    </View>
  );
}