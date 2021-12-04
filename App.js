import React from 'react';
import { StyleSheet, View } from 'react-native';
import EntryPage from "./components/EntryPage"

function App() {
  return (
    <View style={styles.container}>
      <EntryPage/>
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

export default App