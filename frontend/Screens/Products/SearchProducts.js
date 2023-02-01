import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base'

const SearchProducts = (props) => {
    const {productFiltered} = props;
  return (
    <Content>
      {productsFiltered.length > 0 ? (
        productFiltered.map(item => (
          <ListItem
            // onPress={navigate}
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
}

export default SearchProducts

const styles = StyleSheet.create({})