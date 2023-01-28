import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {Container, Header, Icon, Item, Input, Text} from 'native-base';

import ProductList from './ProductList';
import {Style} from 'react-native/types';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts(data);
      setProductsFiltered(data);

      return () => {
        setProducts([]);
      };
    };
  }, []);

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            //onFocus={}
            //    onChangeText={(text) =>}
          />
        </Item>
      </Header>
      <View style={styles.Container}>
        <Text>Product Container</Text>
        <View style={styles.Container}>
          <FlatList
            horizontal
            data={products}
            renderItem={item => <ProductList key={item.id} item={item} />}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    </Container>
  );
};
export default ProductContainer;
