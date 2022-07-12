import { StyleSheet, Text, View } from 'react-native';

import react from "react";

const Header = props => {
    const {tittle} = props

    return (
        <View style = {StyleSheet.header}>
            <Text style={StyleSheet.headerTitle}>{title}</Text>
        </View>
    )
}