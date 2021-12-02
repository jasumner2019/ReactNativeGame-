import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EntryPage from "./components/EntryPage"
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <EntryPage/>
      </View>
    </NavigationContainer>
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

export default App