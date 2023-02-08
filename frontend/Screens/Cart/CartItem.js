import { StyleSheet, Text, View, Left, Right, ListItem, Thumbnail,Body } from 'react-native'
import React, {useState} from 'react'
import { Thumbnail } from 'native-base';

const CartItem = (props) => {
    const data = props.item.item.product 
    const [quantity, setQuantity] = useState(props.item.item.quantity)
  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: data.image
              ? data.image
              : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>$ {data.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
}

const styles = StyleSheet.create({
    listItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row'
  }  
});

export default CartItem

