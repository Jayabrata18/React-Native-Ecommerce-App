import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Container,
  Item,
  Icon,
  Header,
  Input,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import ProductList from './ProductList';
import SearchProducts from './SearchProducts';
import Banner from '../../Shared/Banner';
import CategoryFilterd from './CategoryFilterd';
// import {} from 'native-base';

var {height} = Dimensions.get('window');

const data = require('../../assets/data/products.json');
const productsCategories = require('../../assets/data/categories.json');

const ProductContainer = props => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initalState, setInitalState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productsCategories);
    setProductsCtg(data);
    setInitalState(data);
    setActive(-1);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setInitalState();
      setActive();
    };
  }, []);

  const searchedProducts = text => {
    setProductsFiltered(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };
  const openList = () => {
    setFocus(true);
  };
  const onblur = () => {
    setFocus(false);
  };
  //categories
  const changeCtg = ctg => {
    {
      ctg === 'all'
        ? [setProductsCtg(initalState), setActive(true)]
        : [
            setProductsCtg(
              products.filter(i => i.category._id === ctg),
              setActive(true),
            ),
          ];
    }
  };

  return (
    <Container>
      <Header searchbar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onFocus={openList}
            onChangeText={text => searchedProducts(text)}
          />
          {focus == true ? <Icon onPress={onblur} name="ios-close" /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchProducts
          navigation={props.navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <CategoryFilterd
                categories={categories}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
              <View style={styles.listContainer}>
                {productsCtg.map(item => {
                  return (
                    <ProductList
                      navigation={props.navigation}
                      key={item.id}
                      item={item}
                    />
                  );
                })}
              </View>
            ) : (
              <View style={[styles.center, {height: height / 2}]}>
                <Text>No products found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: '#dcdcdc ',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#dcdcdc ',
    width: height,
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductContainer;
