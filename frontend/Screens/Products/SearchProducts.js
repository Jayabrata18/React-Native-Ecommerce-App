import {
  StyleSheet,
  View,
  Content,
  Dimensions,
  Left,
  Body,
  ListItem,
  Thumbnail,
  Text,
} from 'react-native';
import React from 'react';
// import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base'

var {width} = Dimensions.get('window');

const SearchProducts = props => {
  const {productFiltered} = props;
  return (
    <Content style={{width: width}}>
      {productFiltered.length > 0 ? (
        productFiltered.map(item => (
          <ListItem
            onPress={() => {
              props.navigation.navigate('product Details', {item: item});
            }}
            key={item._id}
            avatar>
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{alignSelf: 'center'}}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SearchProducts;
