import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useEffect, useState} from 'react';

import AddItem from './components/AddITem';
import CustomModal from './components/Modal';
import List from './components/itemList';

const image = { uri: "https://i.pinimg.com/originals/87/60/50/8760508c95364b7405978967d5936377.jpg" };

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]); //useState de array
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  
  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerAddItem = () => { 
    console.log('se agrego el item'. textItem)
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem, completed: false}])
    // setItemList({...itemList, id: Math.random()*10, value: textITem}) => hace lo mismo que lo de arriba hehe
    setTextItem('');
  }
  
  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }
  const onHandlerCompleteItem = id => {
    let itemComleted  = itemList.findIndex(item => item.id === id)
    itemList[itemComleted].completed = true
    setItemList({...itemList})
    setModalVisible(!modalVisible)
    console.table(itemList)
  }

return (
      <ImageBackground  source={image} 
      resizeMode="cover" 
      style={styles.image}
      >
        <View style={styles.screen}>
          <CustomModal
            modalVisible = {modalVisible}
            onHandlerDeleteItem = {onHandlerDeleteItem}
            itemSelected = {itemSelected}
            onHandlerCompleteItem = {onHandlerCompleteItem}
            />
          <AddItem
            textItem = {textItem}
             onHandlerAddItem = {onHandlerAddItem}
             onHandlerChangeItem = {onHandlerChangeItem}          
            />
 /*         <List
            item  = {itemList}
            onHandlerModal = {onHandlerModal}
          />         
        </View>  
      </ImageBackground>
  );
}
       
const styles = StyleSheet.create({
  screen: {
    marginTop: '10%',
    padding: 30,
    height: '100%',
  }
})