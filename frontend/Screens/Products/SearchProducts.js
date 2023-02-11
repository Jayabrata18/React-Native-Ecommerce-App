import { StyleSheet, Dimensions,  View } from 'react-native'
import React from 'react'
import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base';

var {width} = Dimensions.get("window")

const SearchProducts = (props) => {
    const {productsfiltered} = props;
  return (
    <Content style={{ width: width}}>
        {productsfiltered.length > 0 ? (
            productsfiltered.map((item) => (
                <ListItem
                //onPress={}
                key={item._id}
                avatar
                >
                    <Left>
                        <Thumbnail
                          source={{uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',}}/>
                    </Left>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.description}</Text>
                    </Body>
                </ListItem>
            ))
        ) : (
            <View style={StyleSheet.center}>
                <Text style={{ alignSelf: 'center' }}>
                    No Products Match The Selected Criteria
                </Text>
            </View>
        )}
      
    </Content>
  )
}

const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SearchProducts;

