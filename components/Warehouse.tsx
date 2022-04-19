import { useState, useEffect } from 'react';
import config from "../config/config.json";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image 
} from 'react-native';
import warehouse from '.././assets/warehouse.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';


function StockList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

  const list = products.map((product, index) => <Text key={index}>{product.name } - { product.stock }</Text>);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Lager-Appen</Text>
        <Image source={warehouse} style={styles.img} />
        <Text style={styles.title2}>Lagerförteckning</Text>
    <View style={styles.itemslist}>
      
      {list} 
    </View>
    </SafeAreaView>
  );
}

export default function Stock() {
  return (
    <ScrollView > 
    
      <View >
       <StockList/>
      </View>
      </ScrollView>
    
  );
}



const styles = StyleSheet.create({
  img: {
    width: 320,
    height: 240,
    marginLeft: 27,
    // borderStyle: 'dashed',
    borderColor: "red",
    backgroundColor: "red"
  },
  title: {
    color: '#33c', 
    fontSize: 42,
    textAlign: 'center',
    fontWeight: "bold"
  },
  title2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    textDecorationLine: "underline"
  },
  itemslist: {
    marginLeft: 140
  }
});