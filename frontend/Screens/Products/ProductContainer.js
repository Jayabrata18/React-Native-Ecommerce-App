import react, {useState, useEffect} from 'react';
import {View,StyleSheet, FlatList} from 'react-native';
import { Container, Header,Text, Icon, Input,Item,  } from 'native-base';

const data = require('../../assets/data/products.json');
import ProductList from './ProductList';
import SearchProducts from './SearchProducts';
import Banner from '../../Share/Banner';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);

      return () => {
        setProducts([]);
        setProductsFiltered([])
          setFocus()
      }
    
  }, []);

  const SearchProducts = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().include(text.toLowerCase()))
    )
  }
  const openList =() => {
    setFocus(true);
  }
  const onBlur = () => {
    setFocus(false);
  }


  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder="search"
                 onFocus={openList}
                 onChangeText={(text) => SearchProducts(text)}
          />
          {focus == true ? (
            <Icon onPress={onBlur} name="ios-close"/>
          ) : null}
        </Item>

      </Header>
      {focus == true ? (
        <SearchProducts
           productsFiltered={productsFiltered}
        />

      ) : (
        <View>
        <View>
          <Banner/>
        </View>
        <View style={{marginTop: 100}}>
          <FlatList
            horizontal
            data={products}
            renderItem={item => <ProductList key={item.id} item={item} />}
            keyExtractor={item => item.name}
          />
        </View>
      </View>

      )}
      
    </Container>
  );
};

export default ProductContainer;
