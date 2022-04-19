import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock.tsx';

export default function App() {
  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.appback}>
        <Text style={styles.title}>Lager-Appen</Text>
        <Image source={warehouse} style={styles.img} />
        <Text style={styles.base0}>Lagerförteckning</Text>
        <Text style={styles.base1}>Namn</Text>
        <Text style={styles.base2}>Antal</Text>
        <Stock/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 320,
    height: 240,
    // marginLeft: 25,
    marginLeft: 27,
    // marginRight: 25,
    // textAlign: "center"
    
  },
  appback: {
    overflow: "scroll"
  },
  title: {
    color: '#33c', 
    fontSize: 42,
    textAlign: 'center',
    fontWeight: "bold"
  },
  base: {
    backgroundColor: '#ababab',
  },
  base0: {

    backgroundColor: '#ababab',
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: 'underline',
    borderStyle: "dashed",
    borderColor: "green"

  },
  base1: {
    backgroundColor: 'red',
    paddingRight: 135,
    paddingBottom: 2 ,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
    },
  base2: {
    paddingLeft: 70,
    paddingBottom: 1,
    marginLeft: 50,
    marginTop: -20,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: "bold"
    
  }
});