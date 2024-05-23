import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is Christian Kwasi Dwamena</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04d89e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '24',
  },
});
