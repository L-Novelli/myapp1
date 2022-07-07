import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddItem(props){

    const  {textItem, onHandlerAddItem, onHandlerChangeItem} = props

    return(
        <View style={styles.container}>
            <TextInput 
            placeholder='Escribe aqui' 
            style={styles.input} 
            value={textItem}
            onChangeText={onHandlerChangeItem}
            />
             <Button title='Add' style={styles.button} onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
        </View>
     
    )
}

const styles = StyleSheet.create({

    screen: {
        marginTop: '10%',
         padding: 30,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image:{
        justifyContent: "center",
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
    },
       
})
