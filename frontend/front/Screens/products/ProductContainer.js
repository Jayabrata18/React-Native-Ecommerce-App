import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import ProductList from './ProductList';

const data = require('../../assets/data/products.json')

const ProductContainer = () => {
    const [products, setProducts] =useState([]);

    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])

  return (
    <View>
      <Text>Product Container</Text>
      <View>
      <FlatList
         horizontal
         data={products}
         renderItem={(item) => <ProductList 
         key={item.id}
         item={item}
         />}
         keyExtractor={item => item.name}
      />
      </View>
    </View>
  );
};
export default ProductContainer;
