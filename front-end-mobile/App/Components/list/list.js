import * as React from "react"
import { View, FlatList } from 'react-native';
import { ListProps } from "./list.props"
import { Text } from '../text'
import { color } from '../../Theme'
// import { icons } from "./icons"

const CONTAINER = {
  flex:1
}

const ITEM = {
    marginVertical: 8,    
};
const TITLE = {
    fontSize: 14,
    color: color.error
};

const Item = ({item}) => {
    return (
        <View style={ITEM}>
            <Text style={TITLE}>{item.messages[0]}</Text>
        </View>
    );
}
  

export function List(props) {
  
  return (
    <View style={CONTAINER}>
        <FlatList 
            data={props.data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.field}
        />        
    </View>
  )
}

List.propTypes = ListProps