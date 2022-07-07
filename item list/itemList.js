import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function List(props){

const { itemList, onHandlerModal } = props

    return (
          
        <FlatList
            data = {itemList}
            renderItem = {data => (
                <TouchableOpacity onPress={onHandlerModal.bind(data.item.id)}>
                <Text style = {{textDecoratoinStyle: data.item.completed ? 'Line-through' : null }}>
                    {data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator =  {false}
            keyExtractor = {item => item.id}
        />  
    )
    
}
const styles = StyleSheet.create({

item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: '10%',
    height: 50,
  },
})