import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock.tsx';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Lager-Appen</Text>
        <Image source={warehouse} style={{ width: 320, height: 240 }} />
        <Text style={styles.base0}>Lagerförteckning</Text>
      <Text style={styles.base1}>Namn</Text>
      <Text style={styles.base2}>Antal kvar</Text>
      <Stock/>
      <StatusBar style="auto" />
       
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#33c', 
    fontSize: 42,
    textAlign: 'center',
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12
    // textAlign: 'center',
  },
  base: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 100,
    
  },
  base0: {

    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: 'underline'

  },
  base1: {
    backgroundColor: '#fff',
    // paddingLeft: 1,
    paddingRight: 150,
    paddingBottom: -1 ,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
    },
  base2: {
  
    paddingLeft: 70,
    // paddingRight: 12,
    paddingBottom: -5,
    marginLeft: 80,
    marginTop: -23,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: "bold"
    
  },
  base3: {
  
    backgroundColor: "red"
    
  }
});