import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006419',
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 120,
    color:'#ffee00',
    fontWeight:'bold'
  }
});
