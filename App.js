import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
      <Modal
        animationType = "slide"
        transparent = {true}
        visible = {modalVisible}
          >
            <View style={styles.modal}>
              <View style={styles.modalView}>
                <View style={styles.modalTitle}>
                  <Text>
                    Mi modal
                  </Text>
                </View>
                <View style={styles.modalMessage}>
                  <Text>Estas seguro que desea borrar ?</Text>
                </View>
                <View style={styles.modalMessage}>
                  <Text style={styles.modalItem}>{itemSelected.value}</Text>
                </View>
                <View style={styles.modalButton}>
                  <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
                </View>
              </View>
            </View>
        </Modal>
        <View style={styles.container}>
        <TextInput 
          placeholder='Escribe aqui' 
          style={styles.input} 
          value={textItem}
          onChangeText={onHandlerChangeItem}  
        />
        <Button title='Add' style={styles.button} onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
      </View>
      <FlatList
        data = {itemList}
        renderItem = {data => (
          <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
              <Text>{data.item.value}</Text>
          </TouchableOpacity>
        )}
          showsVerticalScrollIndicator =  {false}
          keyExtractor = {item => item.id}
      />
    </View>     
  );
}
        
const styles = StyleSheet.create({
  screen: {
    marginTop: '10%',
    padding: 30,
    backgroundColor: 'green'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'green' 
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'purple',
    borderWidth: 2,
  },
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
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(44,14,55,0.5)'
  },  
  modalView: {
    backgroundColor: 'yellow',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    padding: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  modalTitle: {
    color: 'black',
    fontSize: 70
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    marginTop: 15,
  },
  modalItem: {
    fontSize: 30
  }
})