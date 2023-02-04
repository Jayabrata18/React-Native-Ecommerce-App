import { View, Text,StyleSheet, TouchableOpacity, ScrollView, ListItem, Badge} from 'react-native'
import React from 'react'
import { ListItem } from 'native-base';

const CategoryFilterd = (props) => {
  return (
    <ScrollView
       bounces={true}
       horizontal={true}
       style={{ backgroundColor: '#2f2f2' }}
    >
      <ListItem style={{margin: 0, padding: 0, borderRadius:0}}>
         <TouchableOpacity  
           key={1}
           onPress{...() =>{
              props.CategoryFilterd('all'), props.setActive(-1)
           }}
         >
            <Badge style={[styles.center, {margin:5},
               props.active == -1 ? styles.active : styles.inactive
            ]}>
              <Text style={{color: 'white'}}>All</Text>
            </Badge>
         
         </TouchableOpacity>
         {props.categories.map((item) => (
            <TouchableOpacity
               key={item._id}
               onpress={() => {
                  props.CategoryFilterd(item._id),
                  props.setActive(props.categories.indexOf(item))
               }}
               >
                <Badge
                  style={[styles.center,
                    {margin: 5},
                    props.active == props.categories.indexOf(item) ?  styles.active : styles.inactive
                ]}
                >
                  <Text style={{ color: 'white'}}>{item.name}</Text>

                </Badge>
               </TouchableOpacity>
         ))}
      </ListItem>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#03bafc'
    },
    inactive: {
        backgroundColor: '#a0e1eb'
    }
})

export default CategoryFilterd