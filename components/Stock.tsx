import { useState, useEffect } from 'react';
import config from "../config/config.json";
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';



function StockList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

  const list = products.map((product, index) => <Text key={index}>{product.name } - { product.stock }</Text>);

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock() {
  return (
    <ScrollView  style={styles.base1} > 
      <StockList style={styles.base2} />
      </ScrollView>
    
  );
}



const styles = StyleSheet.create({
  base1: {
    marginLeft: 140
  }
});