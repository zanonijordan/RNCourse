import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Input } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Input placeholder="Enter your name" />
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
