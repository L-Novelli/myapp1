import { Button, FlatList, ImageBackground, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AddItem from './AddITem';
import CustomModal from './components/Modal';
import List from './item list/itemList';
import React from 'react';
import {useState} from 'react';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]); //useState de array
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerAddItem = () => { 
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem}])
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

return (
    
    <View style={styles.screen}>
      <CustomModal
        modalVisible = {modalVisible}
        onHandlerDeleteItem = {onHandlerDeleteItem}
        itemSelected = {itemSelected}
        />
      <AddItem
        textItem = {textItem}
        onHandlerChangeItem = {onHandlerChangeItem}
        />
      <List
        item  = {itemList}
        onHandlerModal = {onHandlerModal}
      />
      
    </View>  
  );
}
       
const styles = StyleSheet.create({
  screen: {
    marginTop: '10%',
    padding: 30,
  },
})