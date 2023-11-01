import React from 'react';
import {Stylesheet, Text, View, TouchableOpacity} from 'react-native';

export default function AppItem(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} >
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} >
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}