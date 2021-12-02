import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from "./components/MainPage"

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage/>
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
